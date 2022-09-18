import { z } from "zod";
import { createRouter } from "./context";
import { userRegisterSchema } from "../schema/user.schema";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export const userRouter = createRouter()
  .query("by-username", {
    input: z.object({ username: z.string() }),
    resolve: async ({ ctx, input }) => {
      return await ctx.prisma.user.findUnique({
        where: { username: input.username },
      });
    },
  })
  .mutation("register", {
    input: userRegisterSchema,
    resolve: async ({ ctx, input }) => {
      try {
        const passwordSalt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(input.password, passwordSalt);
        const { email, username } = input;
        const user = await ctx.prisma.user.create({
          data: {
            email: email,
            username: username,
            passwordHash: passwordHash,
          },
        });
      } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
          if (e.code === "P2002") {
            // unique constraint violated
            throw new TRPCError({
              code: "CONFLICT",
              message: "Username or email already taken!",
            });
          }
        }
      }
    },
  }).query('me', {resolve: async ({ctx}) => {
      if (!ctx.user) {
          return null;
      }
      return {username: ctx.user.username}
  }});

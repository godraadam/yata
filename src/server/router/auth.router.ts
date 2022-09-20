import { loginResponseSchema, userloginSchema } from "../schema/user.schema";
import { createRouter } from "./context";
import bcrypt from "bcrypt";
import { TRPCError } from "@trpc/server";
import { signJwt } from "../../utils/jwt";
import { serialize } from "cookie";

export const authRouter = createRouter()
  .mutation("login", {
    input: userloginSchema,
    resolve: async ({ ctx, input }) => {
      // find user by username
      const userFromRepo = await ctx.prisma.user.findUnique({
        where: { username: input.username },
      });

      // check if user exists
      if (!userFromRepo) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `User with username ${input.username} not found.`,
        });
      }

      // verify password
      if (!(await bcrypt.compare(input.password, userFromRepo.passwordHash))) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Incorrect password.",
        });
      }

      // generate jwt token
      const token = signJwt({ username: userFromRepo.username });
      ctx.res.setHeader(
        "Set-Cookie",
        serialize("jwt", token, { path: "/", sameSite: "strict", httpOnly: true, secure:true })
      );
      return loginResponseSchema.parse(userFromRepo);
    },
  })
  .mutation("logout", {
    resolve: ({ ctx }) => {
      if (!ctx.user) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Already logged out.",
        });
      }
      ctx.res.setHeader(
        "Set-Cookie",
        serialize("jwt", "", {path:'/', maxAge:-1 })
      );
      return {message: "Successfully logged out."}
    },
  });

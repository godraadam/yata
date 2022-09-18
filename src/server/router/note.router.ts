import { createRouter } from "./context";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createNoteSchema } from "../schema/note.schema";

export const noteRouter = createRouter()
  .query("note-by-id", {
    input: z.object({
      id: z.string().cuid(),
    }),
    resolve: async ({ input, ctx }) => {
      const note = await ctx.prisma.note.findUnique({
        where: { id: input.id },
      });
      if (!note) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Note ${input.id} not found.`,
        });
      }
      if (note.private) {
        const user = ctx.user;
        if (!user || user.id != note.authorId) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "This note is private.",
          });
        }
      }
      return note;
    },
  })
  .query("notes-of-user", {
    input: z.object({
      skip: z.number().gte(0).default(0),
      limit: z.number().gte(0).lt(100).default(10),
    }),
    resolve: async ({ input, ctx }) => {
      const user = ctx.user;
      if (!user) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Not logged in." });
      }
      const notes = await ctx.prisma.note.findMany({
        where: { authorId: user.id },
        skip: input.skip,
        take: input.limit,
      });
      return notes;
    },
  })
  .query("notes-of-other-user", {
    input: z.object({ id: z.string().cuid() }),
    resolve: async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: input.id },
        // return only public notes
        include: { notes: { where: { private: false } } },
      });
      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `User ${input.id} not found.`,
        });
      }
      return user.notes;
    },
  })
  .mutation("create-note", {
    input: createNoteSchema,
    resolve: async ({ ctx, input }) => {
      const user = ctx.user;
      if (!user) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not logged in.",
        });
      }
      const note = await ctx.prisma.note.create({
        data: { ...input, authorId: user.id },
      });
      return note;
    },
  });

import z from "zod";

export const createNoteSchema = z.object({
  title: z.string().min(1),
  content: z.string(),
  private: z.boolean().default(false)
});

export type CreateNoteSchema = z.infer<typeof createNoteSchema>;

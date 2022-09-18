import { type } from "os";
import z from "zod";

export const userRegisterSchema = z.object({
  username: z.string().min(3).max(16),
  password: z.string().min(8).max(32),
  email: z.string().email(),
});

export type UserRegisterSchema = z.infer<typeof userRegisterSchema>;

export const userloginSchema = z.object({
  username: z.string().min(3).max(16),
  password: z.string().min(8).max(32),
});

export type UserLoginSchema = z.infer<typeof userloginSchema>;

export const loginResponseSchema = z.object({
  username: z.string(),
  email: z.string().email()
})

export type LoginResponseSchema = z.infer<typeof loginResponseSchema>;

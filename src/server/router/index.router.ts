// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { noteRouter } from "./note.router";
import { userRouter } from "./user.router";
import { authRouter } from "./auth.router";


export const appRouter = createRouter()
  .transformer(superjson)
  .merge("note.", noteRouter)
  .merge("user.", userRouter)
  .merge("auth.", authRouter);

// export type definition of API
export type AppRouter = typeof appRouter;

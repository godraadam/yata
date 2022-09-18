// src/server/router/context.ts
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { NextApiRequest, NextApiResponse } from "next";
import { verifyJwt } from "../../utils/jwt";
import { prisma } from "../db/client";

/**
 * Replace this with an object if you want to pass things to createContextInner
 */
type CreateContextOptions = { req: NextApiRequest; res: NextApiResponse };

interface UserCtx {
  username: string;
  iat: string;
  exp: number;
}

// extract user from auth header
async function getUserForRequest(req: NextApiRequest) {
  const token = req.cookies.jwt;
  if (token) {
    try {
      const ctx = verifyJwt<UserCtx>(token);
      const user = await prisma.user.findUnique({
        where: { username: ctx.username },
      });
      return user;
    } catch (e) {
      // invalid jwt given
      return null;
    }
  }
}

/** Use this helper for:
 * - testing, where we dont have to Mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 **/
export const createContextInner = async (opts: CreateContextOptions) => {
  const { req, res } = opts;
  const user = await getUserForRequest(req);
  return {
    req,
    res,
    prisma,
    user,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (
  opts: trpcNext.CreateNextContextOptions
) => {
  return await createContextInner({ req: opts.req, res: opts.res });
};

type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => trpc.router<Context>();

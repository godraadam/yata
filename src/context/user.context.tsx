import React, { createContext, useContext } from "react";
import { inferQueryOutput } from "../utils/trpc";

export type User = inferQueryOutput<"user.me">;
interface IUserContext {
  user: User;
  setUser: (user: User) => void;
}

const UserContext = createContext<IUserContext>({
  user: null,
  setUser: (user) => {},
});

export function UserContextProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: IUserContext;
}) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUserContext = () => useContext(UserContext);

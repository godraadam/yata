import React, { createContext, useContext } from "react";

interface IDarkModeContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<IDarkModeContext>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export function DarkModeContextProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: IDarkModeContext;
}) {

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkModeContext = () => useContext(DarkModeContext);

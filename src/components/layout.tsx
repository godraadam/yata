import Head from "next/head";
import { ReactNode } from "react";
import { useDarkModeContext } from "../context/darkmode.context";
import DarkModeToggle from "./darkmode.toggle";
import Footer from "./footer";

const Layout = ({
  children,
  title = "My notes app",
}: {
  children: ReactNode;
  title?: string;
}) => {
  const { darkMode } = useDarkModeContext();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {darkMode ? (
          <link rel="icon" href="/favicon-dark.ico" />
        ) : (
          <link rel="icon" href="/favicon.ico" />
        )}
      </Head>
      <div className="flex flex-col h-screen dark:bg-stone-800">
        <DarkModeToggle />

        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

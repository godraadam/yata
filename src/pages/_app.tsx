// src/pages/_app.tsx
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import type { AppType } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import superjson from "superjson";
import { DarkModeContextProvider } from "../context/darkmode.context";
import { User, UserContextProvider } from "../context/user.context";
import type { AppRouter } from "../server/router/index.router";
import "../styles/globals.css";
import { trpc } from "../utils/trpc";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [user, setUser] = useState<User>(null);
  
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    //set dark mode
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark"); 
    }
  }, [darkMode]);
  
  const { data, isLoading } = trpc.useQuery(["user.me"], {
    onSuccess: (user) => {
      setUser(user);
    },
  });

  if (isLoading) {
    return <div className="flex flex-col items-center justify-center h-screen">
      <ClipLoader/>
      </div>;
  }
  return (
    <UserContextProvider value={{ user, setUser }}>
      <DarkModeContextProvider value={{darkMode, toggleDarkMode: () => setDarkMode(!darkMode)}}>
        <Component {...pageProps} />
      </DarkModeContextProvider>
    </UserContextProvider>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({ url }),
      ],
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },

      // To use SSR properly you need to forward the client's headers to the server
      // headers: () => {
      //   if (ctx?.req) {
      //     const headers = ctx?.req?.headers;
      //     delete headers?.connection;
      //     return {
      //       ...headers,
      //       "x-ssr": "1",
      //     };
      //   }
      //   return {};
      // }
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);

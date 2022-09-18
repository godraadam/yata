import type { NextPage } from "next";
import Head from "next/head";
import App from "./root";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>My Notes App</title>
        <meta name="description" content="Write some notes!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <App/>
      </main>
    </>
  );
};

export default Home;
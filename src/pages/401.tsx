import { NextPage } from "next";
import Layout from "../components/layout";

const NotLoggedIn: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col flex-grow items-center justify-center dark:text-stone-200">
        <span className="text-4xl font-bold py-1">
          You can't view this page because you are not logged in
        </span>
        <span className="text-xl">
          go to{" "}
          <a className="underline" href="/login">
            login
          </a>
        </span>
      </div>
    </Layout>
  );
};

export default NotLoggedIn;

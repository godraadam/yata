import { NextPage } from "next";

const NotLoggedIn: NextPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen dark:bg-stone-900">
        <div className="flex flex-col mx-auto dark:text-stone-200">
          <span className="text-4xl font-bold">
            You can't view this page because you are not logged in
          </span>
          <span className="text-xl">
            go to{" "}
            <a className="underline" href="/login">
              login
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default NotLoggedIn;

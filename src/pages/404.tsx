import { NextPage } from "next";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
    const router = useRouter()
  return (
    <>
      <div className="flex items-center justify-center h-screen dark:bg-stone-900">
        <div className="flex flex-col mx-auto dark:text-stone-200">
          <span className="text-4xl font-bold">
            Nothing to see here
          </span>
          <span className="text-xl">
            go {" "}
            <button onClick={() => router.back()}className="underline">
              back
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default NotFound;

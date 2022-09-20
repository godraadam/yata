import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../components/layout";

const NotFound: NextPage = () => {
    const router = useRouter()
  return (
    <Layout>
        <div className="flex flex-grow flex-col items-center justify-center dark:text-stone-200">
          <div className="text-4xl font-bold py-1">
            Nothing to see here
          </div>
          <div className="text-xl">
            go {" "}
            <button onClick={() => router.back()}className="underline">
              back
            </button>
          </div>
        </div>
    </Layout>
  );
};

export default NotFound;

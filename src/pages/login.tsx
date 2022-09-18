import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { UserLoginSchema } from "../server/schema/user.schema";
import { trpc } from "../utils/trpc";
import { useUserContext } from "../context/user.context";

const Login: NextPage = () => {
  const { setUser } = useUserContext();
  const { mutate, error, isLoading } = trpc.useMutation(["auth.login"], {
    onError: (error) => console.log(error),
    onSuccess: async (resp) => {
      setUser(resp);
      await router.push("/dashboard");
    },
  });

  const router = useRouter();

  const { handleSubmit, register } = useForm<UserLoginSchema>();

  function onSubmit(values: UserLoginSchema) {
    mutate(values);
  }

  return (
    <div className="flex justify-center items-center h-screen dark:bg-black">
      <div>
        <h1 className="font-bold text-5xl dark:text-white"> Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gap-3 rounded-xl shadow-md p-12"
        >
          <label className="dark:text-white ">Username</label>
          <input
            type="text"
            placeholder="John Doe"
            className="px-3 py-2 my-2 rounded-full w-full bg-gray-100"
            {...register("username")}
          />
          <br />
          <label className="dark:text-white">Password</label>
          <input
            type="password"
            className="px-3 py-2 my-2 rounded-full w-full bg-gray-100"
            {...register("password")}
          />
          <br />
          <button
            type="submit"
            className="bg-black font-semibold text-xl text-white w-full py-2 my-2 rounded-full dark:text-black dark:bg-white"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <span>Don't have an account yet? Go to </span>
        <Link href="/signup">
          <a className="underline">Signup</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;

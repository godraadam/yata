import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { UserRegisterSchema } from "../server/schema/user.schema";
import { trpc } from "../utils/trpc";

const Signup: NextPage = () => {
  const { handleSubmit, register } = useForm<UserRegisterSchema>();
  const router = useRouter();

  const { mutate, error, isLoading } = trpc.useMutation(["user.register"], {
    onError: (error) => console.log(error),
    onSuccess: async () => {
        await router.push("/login")
    },
  });

  function onSubmit(values: UserRegisterSchema) {
    mutate(values);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="font-bold text-5xl text-black"> Sign up</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gap-3 rounded-xl shadow-md p-12"
        >
          <label className="">Username</label>
          <input
            type="text"
            placeholder="John Doe"
            className="px-3 py-2 m-2 rounded-full bg-gray-100 w-full"
            {...register("username")}
          />
          <br />
          <label className="">Password</label>
          <input
            type="password"
            className="px-3 py-2 m-2 rounded-full bg-gray-100 w-full"
            {...register("password")}
          />
          <br />
          <label className="">E-mail</label>
          <input
            type="email"
            placeholder="john.doe@example.com"
            className="px-3 py-2 m-2 rounded-full bg-gray-100 w-full"
            {...register("email")}
          />
          <br />
          {isLoading ? (
            <button
              disabled
              className="bg-black font-semibold text-xl text-white w-full py-2 my-2 rounded-full"
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="bg-black font-semibold text-xl text-white w-full py-2 my-2 rounded-full"
            >
              Sign up
            </button>
          )}
        </form>
        <span>Already have an account? Go to </span>
        <Link href="/login" className="underline">
          <a className="underline">Login</a>
        </Link>
      </div>
    </div>
  );
};

export default Signup;

import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { UserRegisterSchema } from "../server/schema/user.schema";
import { trpc } from "../utils/trpc";
import ActionButton from "../components/button.action";
import DarkModeToggle from "../components/darkmode.toggle";
import { textfieldClass } from "../styles/components.styles";
import Layout from "../components/layout";

const Signup: NextPage = () => {
  const { handleSubmit, register } = useForm<UserRegisterSchema>();
  const router = useRouter();

  const { mutate, error, isLoading } = trpc.useMutation(["user.register"], {
    onError: (error) => console.log(error),
    onSuccess: async () => {
      await router.push("/login");
    },
  });

  function onSubmit(values: UserRegisterSchema) {
    mutate(values);
  }

  return (
    <Layout title="Signup">
      <div className="flex justify-center items-center flex-grow">
        <div>
          <h1 className="font-bold text-5xl text-black dark:text-stone-300">
            {" "}
            Sign up
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-3 rounded-xl shadow-lg p-12 m-10 dark:shadow-stone-800"
          >
            <label className="dark:text-stone-400">Username</label>
            <input
              type="text"
              placeholder="John Doe"
              className={textfieldClass}
              {...register("username")}
            />
            <br />
            <label className="dark:text-stone-400">Password</label>
            <input
              type="password"
              className={textfieldClass}
              {...register("password")}
            />
            <br />
            <label className="dark:text-stone-400">E-mail</label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              className={textfieldClass}
              {...register("email")}
            />
            <br />
            <ActionButton
              error={!!error}
              success={false}
              loading={isLoading}
              onClick={() => {}}
              name="Login"
              type="submit"
            ></ActionButton>
          </form>
          <span className="dark:text-stone-400">
            Already have an account? Go to{" "}
          </span>
          <Link href="/login">
            <a className="underline dark:text-stone-400">Login</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;

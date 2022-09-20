import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { UserLoginSchema } from "../server/schema/user.schema";
import { trpc } from "../utils/trpc";
import { useUserContext } from "../context/user.context";
import { textfieldClass } from "../styles/components.styles";
import ActionButton from "../components/button.action";
import DarkModeToggle from "../components/darkmode.toggle";
import Layout from "../components/layout";

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
    <Layout title="Login">
      <div className="flex flex-grow justify-center items-center">
        <div>
          <h1 className="font-bold text-5xl dark:text-stone-300"> Login</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-3 rounded-3xl shadow-lg p-12 m-10 dark:shadow-stone-800"
          >
            <label className="dark:text-stone-400 ">Username</label>
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
            Don't have an account yet? Go to{" "}
          </span>
          <Link href="/signup">
            <a className="underline dark:text-stone-400">Signup</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

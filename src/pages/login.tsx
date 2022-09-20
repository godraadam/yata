import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { UserLoginSchema } from "../server/schema/user.schema";
import { trpc } from "../utils/trpc";
import { useUserContext } from "../context/user.context";
import ActionButton from "../components/button.action";
import Layout from "../components/layout";
import TextField from "../components/input.text";

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
          <h1 className="font-bold text-5xl dark:text-stone-300 py-5"> Login</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-3 drop-shadow-lg pt-10 pb-3 px-10 dark:shadow-black"
          >
            <label className="dark:text-stone-400 ">Username</label>
            <TextField type="text" placeholder="@john_doe" props={register("username")}/>
            <br />
            <label className="dark:text-stone-400">Password</label>
            <TextField type="password" props={register("password")}/>
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

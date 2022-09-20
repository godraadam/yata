import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { UserRegisterSchema } from "../server/schema/user.schema";
import { trpc } from "../utils/trpc";
import ActionButton from "../components/button.action";
import Layout from "../components/layout";
import TextField from "../components/input.text";

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
          <h1 className="font-bold text-5xl text-black py-5 dark:text-stone-300">
            Sign up
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-3 pt-10 pb-3 px-10"
          >
            <label className="dark:text-stone-400">Username</label>
            <TextField type="text" placeholder="John Doe" props={register("username")}/>
            <br />
            <label className="dark:text-stone-400">Password</label>
            <TextField type="password" props={register("password")}/>
            <br />
            <label className="dark:text-stone-400">E-mail</label>
            <TextField type="email" placeholder="john.doe@example.com" props={register("email")}/>
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

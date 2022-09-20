import type { NextPage } from "next";
import { useUserContext } from "../context/user.context";
import Dashboard from "./dashboard";
import Login from "./login";

const Home: NextPage = () => {
  const { user } = useUserContext();
  if (!user) {
    return <Login />;
  }

  return <Dashboard />;
};

export default Home;
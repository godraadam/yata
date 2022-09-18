import type { NextPage } from "next";
import { useUserContext } from "../context/user.context";
import Dashboard from "./dashboard";
import Login from "./login";

const App: NextPage = () => {
  const { user } = useUserContext();
  console.log(`in App: ${JSON.stringify(user)}`);
  if (!user) {
    return <Login />;
  }

  return <Dashboard />;
};

export default App;

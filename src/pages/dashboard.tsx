import { NextPage } from "next";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import Navbar from "../components/navbar";
import { useUserContext } from "../context/user.context";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const {user} = useUserContext();

  if (!user) {
    router.push("/401");
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader />
      </div>
    );
  }

  return (
    <div className="flex h-screen dark:bg-black">
      <Navbar />
    </div>
  );
};

export default Dashboard;

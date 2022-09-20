import { NextPage } from "next";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import LoggedinLayout from "../components/layout.loggedin";
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
    <LoggedinLayout title="Dashboard">
      <div className="flex h-screen dark:bg-black">
      </div>
    </LoggedinLayout>
  );
};

export default Dashboard;

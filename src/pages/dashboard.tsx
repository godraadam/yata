import { NextPage } from "next";
import LoggedinLayout from "../components/layout.loggedin";

const Dashboard: NextPage = () => {
  return (
    <LoggedinLayout title="Dashboard">
      <div className="flex flex-grow">Dashboard</div>
    </LoggedinLayout>
  );
};

export default Dashboard;

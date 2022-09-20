import { NextPage } from "next";
import LoggedinLayout from "../components/layout.loggedin";
import Navbar from "../components/navbar";


const TasksPage: NextPage = () => {
  

  return (
    <LoggedinLayout>
        <div className="flex flex-grow">
        Tasks
        </div>
    </LoggedinLayout>
    );
};

export default TasksPage;

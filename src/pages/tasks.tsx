import { NextPage } from "next";
import LoggedinLayout from "../components/layout.loggedin";

const TasksPage: NextPage = () => {
  return (
    <LoggedinLayout>
      <div className="flex flex-grow">Tasks</div>
    </LoggedinLayout>
  );
};

export default TasksPage;

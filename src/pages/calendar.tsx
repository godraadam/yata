import { NextPage } from "next";
import LoggedinLayout from "../components/layout.loggedin";

const CalendarPage: NextPage = () => {
  return (
    <LoggedinLayout>
      <div className="flex flex-grow">Calendar</div>
    </LoggedinLayout>
  );
};

export default CalendarPage;

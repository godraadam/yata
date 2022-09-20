import { NextPage } from "next";
import LoggedinLayout from "../components/layout.loggedin";

const NotesPage: NextPage = () => {
  return (
    <LoggedinLayout>
      <div className="flex flex-grow">Notes</div>
    </LoggedinLayout>
  );
};

export default NotesPage;

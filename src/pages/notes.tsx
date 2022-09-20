import { NextPage } from "next";
import { useRouter } from "next/router";
import LoggedinLayout from "../components/layout.loggedin";
import Navbar from "../components/navbar";

const NotesPage: NextPage = () => {
  const router = useRouter();

  return (
    <LoggedinLayout>
      <div className="flex flex-grow">Notes</div>
    </LoggedinLayout>
  );
};

export default NotesPage;

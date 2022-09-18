import { NextPage } from "next";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";


const NotesPage: NextPage = () => {
  const router = useRouter();
  

  return (
    <div>
        <Navbar/>
        <div>
            Notes
        </div>
    </div>
    );
};

export default NotesPage;

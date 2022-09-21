import { NextPage } from "next";
import { ClipLoader } from "react-spinners";
import LoggedinLayout from "../components/layout.loggedin";
import { trpc } from "../utils/trpc";

const NotesPage: NextPage = () => {
  const { data, isLoading } = trpc.useQuery([
    "note.notes-of-user",
    { skip: 0, limit: 10 },
  ]);
  if (isLoading) {
    return (
      <LoggedinLayout>
        <div className="flex flex-grow items-center justify-center">
          <ClipLoader />
        </div>
      </LoggedinLayout>
    );
  }
  return (
    <LoggedinLayout>
      <div className="flex flex-grow justify-center pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-start gap-10">
          {data?.map((note) => {
            return (
              <div className="rounded-lg shadow-md p-10 w-full h-fit bg-stone-100" key={note.id}>
                <h1 className="text-3xl">{note.title}</h1>
                <article>{note.content}</article>
              </div>
            );
          })}
        </div>
        <button className="rounded-full bg-red-500 text-xl text-white shadow-md h-16 w-16 absolute bottom-20 right-20">+</button>
      </div>
    </LoggedinLayout>
  );
};

export default NotesPage;

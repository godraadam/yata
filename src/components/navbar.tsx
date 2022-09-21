import { Logout } from "./logout";
import NavbarItem from "./navbar.item";

const Navbar = () => {
  return (
    <div className="grid grid-flow-col grid-rows-4 md:grid-rows-2 lg:grid-rows-1 rounded-lg mx-auto sticky top-10 py-2 px-40 h-fit bg-stone-200 gap-10 shadow-lg dark:shadow-black">
      <NavbarItem name="Notes" href="/notes" />
      <NavbarItem name="Tasks" href="/tasks" />
      <NavbarItem name="Calendar" href="/calendar" />
      <Logout />
    </div>
  );
};

export default Navbar;

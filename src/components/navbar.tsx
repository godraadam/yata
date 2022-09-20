import DarkModeToggle from "./darkmode.toggle";
import { Logout } from "./logout";
import NavbarItem from "./navbar.item";

const Navbar = () => {
  return (
    <div className="flex justify-around  rounded-xl mx-20 my-5 px-40 py-2 h-fit shadow-lg dark:bg-stone-800 dark:shadow-black">
      <NavbarItem name="Notes" href="/notes" />
      <NavbarItem name="Tasks" href="/tasks" />
      <NavbarItem name="Calendar" href="/calendar" />
      <Logout />
      <DarkModeToggle />
    </div>
  );
};

export default Navbar;

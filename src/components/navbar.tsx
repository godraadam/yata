import DarkModeToggle from "./darkmode.toggle";
import { Logout } from "./logout";
import NavbarItem from "./navbar.item";

const Navbar = () => {
  return (
    <div className="flex flex-grow px-10 h-fit pt-5 gap-3 border-b-2 border-b-gray-300 dark:bg-black static top-0">
      <NavbarItem name="Notes" href="/notes" />
      <NavbarItem name="Tasks" href="/tasks" />
      <NavbarItem name="Calendar" href="/calendar" />
      <Logout />
      <DarkModeToggle/>
    </div>
  );
};

export default Navbar;

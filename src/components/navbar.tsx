import { Logout } from "./logout";
import NavbarItem from "./navbar.item";

const Navbar = () => {
  return (
    <div className="flex px-10 pt-5 gap-3 border-b-2 border-b-gray-300">
      <NavbarItem name="Notes" href="/notes" />
      <NavbarItem name="Tasks" href="/tasks" />
      <NavbarItem name="Calendar" href="/calendar" />
      <Logout />
    </div>
  );
};

export default Navbar;

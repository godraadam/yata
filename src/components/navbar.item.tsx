import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarItemProps {
  href: string;
  name: string;
}

const NavbarItem = ({ href, name }: NavbarItemProps) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Link href={href}>
      <a
        className={`text-lg rounded-lg py-1 px-3 dark:text-white ${
          path == href ? " bg-stone-300 dark:bg-stone-700" : ""
        }`}
      >
        {name}
      </a>
    </Link>
  );
};

export default NavbarItem;

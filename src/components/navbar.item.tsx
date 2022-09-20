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
        className={`text-lg px-2 dark:text-white ${
          path == href ? "underline decoration-2 underline-offset-8 decoration-red-500" : ""
        }`}
      >
        {name}
      </a>
    </Link>
  );
};

export default NavbarItem;

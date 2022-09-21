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
        className={`text-lg py-2 px-4 text-center ${
          path == href ? "border border-black rounded-lg" : ""
        }`}
      >
        {name}
      </a>
    </Link>
  );
};

export default NavbarItem;

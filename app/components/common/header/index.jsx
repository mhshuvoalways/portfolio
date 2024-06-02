import DropDown from "@/app/components/dropdown";
import MyImage from "@/public/images/mhshuvo.png";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Testimonials",
    url: "/testimonials",
  },
  {
    name: "Experience",
    url: "/experience",
  },
];

const Header = () => {
  return (
    <header className="border-gray-800 border px-5 py-3 rounded-full flex justify-between items-center">
      <Link href="/">
        <Image
          src={MyImage}
          alt=""
          className="w-11 h-11 rounded-full cursor-pointer border-primary border-2"
        />
      </Link>
      <div className="md:flex justify-between items-center gap-6 font-semibold text-primary hidden">
        {items.map((el) => (
          <Link href={el.url} key={el.name}>
            {el.name}
          </Link>
        ))}
      </div>
      <div className="block md:hidden">
        <DropDown btnIcon={"fa-solid fa-bars"} items={items} />
      </div>
    </header>
  );
};

export default Header;

"use client";

import DropDown from "@/app/components/common/dropdown";
import MyImage from "@/public/images/mhshuvo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    name: "Reviews",
    url: "/reviews",
  },
  {
    name: "Experiences",
    url: "/experiences",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setPrevScrollY(currentScrollY);
      if (currentScrollY > prevScrollY) {
        setScrollDirection(false);
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header
      className={`border-gray-800 border px-5 py-3 rounded-full flex justify-between items-center z-10 ${
        prevScrollY <= 50 ? "bg-transparent" : "bg-current"
      } transition-transform duration-500 ease-in-out ${
        scrollDirection ? "sticky top-0" : "-translate-y-full"
      } `}
    >
      <Link href="/">
        <Image
          src={MyImage}
          alt=""
          className="w-11 h-11 rounded-full cursor-pointer border-primary border-2"
        />
      </Link>
      <div className="sm:flex justify-between items-center gap-6 font-semibold text-primary hidden">
        {items.map((el) => (
          <Link href={el.url} key={el.name}>
            {el.name}
          </Link>
        ))}
      </div>
      <div className="block sm:hidden">
        <DropDown btnIcon={"fa-solid fa-bars"} items={items} />
      </div>
    </header>
  );
};

export default Header;

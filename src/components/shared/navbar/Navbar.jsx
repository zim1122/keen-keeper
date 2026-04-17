import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import MyLink from "./MyLink";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/timeline",
      text: "Timeline",
    },
    {
      path: "/stats",
      text: "Stats",
    },
  ];

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar flex-col md:flex-row gap-5 justify-between items-center container mx-auto">
        <div className="">
          <Image src={logo} alt="keen keeper" />
        </div>

        <div className="">
          <ul className="flex   items-center md:justify-center">
            {navItems.map((item, index) => (
              <MyLink key={index} href={item.path}>
                {item.text}
              </MyLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

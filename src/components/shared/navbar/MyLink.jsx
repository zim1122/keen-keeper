"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        className={`btn border-none rounded-md ${pathname === href ? "bg-[#244D3F] text-white" : "text-[#64748B] bg-transparent"}`}
        href={href}
      >
        {href === "/" && <RiHome2Line />}
        {href === "/timeline" && <IoMdTime />}
        {href === "/stats" && <TfiStatsUp />}
        {children}
      </Link>
    </li>
  );
};

export default MyLink;

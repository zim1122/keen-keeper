import Image from "next/image";
import React from "react";
import footerLogo from "@/assets/logo-xl.png";
import instagram from "@/assets/instagram.png";
import facebook from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F]">
      <div className="container mx-auto p-5">
        <div className="footer footer-horizontal footer-center  text-base-content rounded p-10">
          <nav>
            <div className="space-y-4 flex justify-center items-center flex-col mt-10">
              <Image src={footerLogo} alt="keen keeper" />
              <p className="text-white/70">
                Your personal shelf of meaningful connections. Browse, tend, and
                nurture the relationships that matter most.
              </p>
              <h1 className="text-xl mb-3 text-white">Social Links</h1>
            </div>
            <div className="grid grid-flow-col gap-4">
              <div>
                <Image src={instagram} alt="keen keeper" />
              </div>
              <div>
                <Image src={facebook} alt="keen keeper" />
              </div>
              <div>
                <Image src={twitter} alt="keen keeper" />
              </div>
            </div>
          </nav>
        </div>
        <div className="border-b w-full border-white/30"></div>
        <aside className="flex flex-col md:flex-row gap-5 justify-between items-center my-10 ">
          <div>
            <p className="text-white/50">
              © {new Date().getFullYear()} - KeenKeeper. All rights reserved.
            </p>
          </div>
          <nav className="grid grid-flow-col gap-5 text-white/50">
            <a className="link link-hover ">Privacy Policy</a>
            <a className="link link-hover">Terms of Service </a>
            <a className="link link-hover">Cookies</a>
          </nav>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;

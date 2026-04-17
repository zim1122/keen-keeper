import React from "react";
import FriendInfoCards from "./FriendInfoCards";

const Banner = () => {
  return (
    <div className="px-5">
      <div className="hero  my-20">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="py-6 text-gray-500">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the <br /> relationships that matter most.
            </p>
            <button className="btn rounded-md bg-[#244D3F] text-white">
              <span className="text-sm md:text-lg">+ </span> Add a Friend
            </button>
          </div>
        </div>
      </div>

      <FriendInfoCards />

      <div className="border-b w-full border-black/10 px-10 py-10"></div>
    </div>
  );
};

export default Banner;

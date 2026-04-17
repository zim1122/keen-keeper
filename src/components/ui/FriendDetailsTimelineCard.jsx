import React from "react";
import { BiMessageDots } from "react-icons/bi";
import { LiaVideoSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";

const FriendDetailsTimelineCard = ({ timeline }) => {
  const { type, formatted, matchFriend } = timeline;
  console.log(matchFriend);
  return (
    <div className=" text-xl text-black flex flex-col sm:flex-row justify-center gap-4 sm:gap-2 sm:justify-between items-center border-b border-black/20 p-5">
      <div className="flex items-center justify-center gap-3 ">
        <div>
          {type === "call" && (
            <LuPhoneCall className="text-3xl md:text-4xl font-bold" />
          )}

          {type === "text" && (
            <BiMessageDots className="text-3xl md:text-4xl font-bold " />
          )}
          {type === "video" && (
            <LiaVideoSolid className="text-3xl md:text-4xl font-bold " />
          )}
        </div>
        <div>
          <p className="text-lg md:text-2xl ">
            {type === "call" && "Call"}
            {type === "text" && "text"}
            {type === "video" && "Video"}
          </p>

          <p className="text-black/50 text-sm sm:text-md ">
            {type === "call" && `Call with ${matchFriend.name} `}
            {type === "text" && `Text  with ${matchFriend.name} `}
            {type === "video" && `Video  with ${matchFriend.name} `}
          </p>
        </div>
      </div>
      <span className="font-semibold text-black text-sm md:text-lg">
        {formatted}
      </span>
    </div>
  );
};

export default FriendDetailsTimelineCard;

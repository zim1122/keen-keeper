import React from "react";
import callImage from "@/assets/call.png";
import videoImage from "@/assets/video.png";
import textImage from "@/assets/text.png";
import Image from "next/image";

const TimelineCard = ({ timeline }) => {
  const { type, formatted, matchFriend } = timeline;

  // console.log(type, formatted, matchFriend);

  return (
    <div className=" text-xl text-black flex  shadow-md rounded-lg gap-4 sm:gap-2  items-center border border-base-300 sha p-5">
      <div className="flex items-center justify-center gap-5 ">
        <div>
          {type === "call" && (
            <Image src={callImage} alt="call" width={30} height={30} />
          )}

          {type === "text" && (
            <Image src={textImage} alt="call" width={30} height={30} />
          )}
          {type === "video" && (
            <Image src={videoImage} alt="call" width={30} height={30} />
          )}
        </div>
        <div>
          <div className="text-lg md:text-xl flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="font-bold ">
              {type === "call" && "Call"}
              {type === "text" && "Text"}
              {type === "video" && "Video"}
            </p>
            <p> with {matchFriend.name}</p>
          </div>

          <p className="text-black/50 text-sm sm:text-md ">{formatted}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;

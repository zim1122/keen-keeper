import Image from "next/image";
import React from "react";
import { BsArchive } from "react-icons/bs";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";

const FriendDetailsPageLeft = ({ matchFriend }) => {
  const { picture, tags, bio, email, name, status } = matchFriend;
  return (
    <div className=" space-y-6">
      <div className="card bg-base-100  shadow-sm">
        <div className="card-body justify-center items-center space-y-2">
          <div className="rounded-full object-cover overflow-hidden w-20 h-20 flex justify-center items-center">
            <Image
              className=""
              src={picture}
              alt={name}
              width={100}
              height={100}
            />
          </div>
          <h2 className="card-title text-2xl md:text-3xl">{name}</h2>

          <div className="card-actions">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="text-green-800 bg-green-300 rounded-full px-3 py-1 text-center"
              >
                {tag}
              </p>
            ))}
          </div>
          <div
            className={`card-actions rounded-full px-3 py-1 text-center text-white 
                    ${status === "overdue" && " bg-red-700"} 
                  ${status === "on-track" && " bg-green-900"}
                  ${status === "almost due" && " bg-yellow-500"}`}
          >
            {status}
          </div>
          <p className="text-lg text-center  text-black/50 italic font-bold">{`"${bio}"`}</p>
          <p className="text-lg text-center text-black/50 ">
            Preferred: {email}
          </p>
        </div>
      </div>

      <div className="flex py-4 rounded-lg bg-base-100 flex-row gap-3 items-center justify-center shadow-sm">
        <HiOutlineBellSnooze className="text-3xl" />
        <p className="font-semibold text-xl">Snooze 2 weeks</p>
      </div>
      <div className="flex py-4 rounded-lg bg-base-100 flex-row gap-3 items-center justify-center shadow-sm">
        <BsArchive className="text-xl" />
        <p className="font-semibold text-xl">Archive</p>
      </div>
      <div className="flex py-4 rounded-lg bg-base-100 flex-row gap-3 items-center text-red-600 justify-center shadow-sm">
        <RiDeleteBin6Line className="text-2xl" />
        <p className="font-semibold text-xl">Delete</p>
      </div>
    </div>
  );
};

export default FriendDetailsPageLeft;

"use client";
import { TimelineContext } from "@/lib/contexts/TimelineContextProvider";
import React, { useContext } from "react";
import { BiMessageDots } from "react-icons/bi";
import { LiaVideoSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";
import { MdHistory } from "react-icons/md";
import FriendDetailsTimelineCard from "../ui/FriendDetailsTimelineCard";
import { toast } from "react-toastify";
import Link from "next/link";

const FriendDetailsPageRight = ({ matchFriend }) => {
  const { days_since_contact, goal, next_due_date } = matchFriend;

  const { timelines, setTimelines } = useContext(TimelineContext);
  //   console.log(timelines);

  const date = new Date();

  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // console.log(formatted);
  const btnHandler = (btn) => {
    // console.log("call btn clicked", btn);

    const newTimeline = {
      ...timelines,
      type: btn,
      formatted,
      matchFriend,
    };

    const reverseTimeline = [...timelines, newTimeline].reverse();
    setTimelines(reverseTimeline);

    if (btn === "call") {
      toast.success(
        <span className="flex items-center gap-2">
          <LuPhoneCall /> Calling {matchFriend.name}...
        </span>,
        { position: "top-center" },
      );
    } else if (btn === "text") {
      toast.success(
        <span className="flex items-center gap-2">
          <BiMessageDots /> Message sent to {matchFriend.name}
        </span>,
        { position: "top-center" },
      );
    } else {
      toast.success(
        <span className="flex items-center gap-2">
          <LiaVideoSolid /> Starting video call with {matchFriend.name}
        </span>,
        { position: "top-center" },
      );
    }
  };

  // console.log("tracking btn", trackingBtn);
  // console.log({ timelines: timelines });

  return (
    <div className="space-y-8">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-15">
        <div className="card bg-base-100 justify-center border border-base-200 items-center shadow-sm">
          <div className="p-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#244D3F]">
              {days_since_contact}
            </h2>
            <p className="text-gray-500">Days Since Contact</p>
          </div>
        </div>
        <div className="card bg-base-100 justify-center items-center shadow-sm border border-base-200">
          <div className="p-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#244D3F]">{goal}</h2>
            <p className="text-gray-500">Goal (Days)</p>
          </div>
        </div>
        <div className="card bg-base-100 justify-center items-center shadow-sm border border-base-200">
          <div className="p-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#244D3F]">
              {next_due_date}
            </h2>
            <p className="text-gray-500">Next Due</p>
          </div>
        </div>
      </div>

      <div className=" p-8 rounded-lg bg-base-100   shadow-sm space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-2xl text-black/75 font-semibold">
            Relationship Goal
          </p>
          <button className="btn">Edit</button>
        </div>
        <p className=" text-xl text-black/50">
          Connect every
          <span className="font-semibold text-black"> {goal} days</span>
        </p>
      </div>

      <div className="card bg-base-100 shadow-md justify-center border border-base-200 p-7 space-y-4">
        <h2 className="text-2xl text-black/75 font-semibold">Quick Check-In</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2 ">
          <div
            onClick={() => btnHandler("call")}
            className="card bg-[#F8FAFC] justify-center border border-base-300 items-center shadow-sm"
          >
            <div className="px-5 py-7 text-center flex flex-col justify-center items-center">
              <LuPhoneCall className="text-4xl font-bold mb-4" />
              <p className="text-2xl ">Call</p>
            </div>
          </div>
          <div
            onClick={() => btnHandler("text")}
            className="card bg-[#F8FAFC] justify-center border border-base-300 items-center shadow-sm"
          >
            <div className="px-5 py-7 text-center flex flex-col justify-center items-center">
              <BiMessageDots className="text-4xl font-bold mb-4" />
              <p className="text-2xl ">Text</p>
            </div>
          </div>
          <div
            onClick={() => btnHandler("video")}
            className="card bg-[#F8FAFC] justify-center border border-base-300 items-center shadow-sm"
          >
            <div className="px-5 py-7 text-center flex flex-col justify-center items-center ">
              <LiaVideoSolid className="text-4xl font-bold mb-4" />
              <p className="text-2xl ">Video</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-8 rounded-lg bg-base-100   shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
          <p className="text-2xl text-black/75 font-semibold">
            Recent Interactions
          </p>
          <Link href={"/timeline"}>
            <button className="btn text-xl text-black">
              <MdHistory />
              Full History
            </button>
          </Link>
        </div>

        {
          timelines.slice(0, 4).map((timeline, ind) => (
            <FriendDetailsTimelineCard key={ind} timeline={timeline} />
          ))

          //  { console.log(timeline);}
        }
      </div>
    </div>
  );
};

export default FriendDetailsPageRight;

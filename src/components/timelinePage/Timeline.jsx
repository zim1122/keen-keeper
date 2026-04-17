"use client";
import React, { useContext, useState } from "react";
import { TimelineContext } from "@/lib/contexts/TimelineContextProvider";
import TimelineCard from "../ui/TimelineCard";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const Timeline = () => {
  const { timelines, selectedType, setSelectedType } =
    useContext(TimelineContext);

  const [search, setSearch] = useState("");
  // const {type } = timelines

  // const CallBtnFiltered = timelines.filter(timeline =>  timeline.type === "call")

  // console.log(CallBtnFilteredTimelines);

  const handlerClick = (type) => {
    setSelectedType(type);
  };

  const filteredTimelines = timelines
    .filter((timeline) =>
      selectedType === "All" ? timelines : timeline.type === selectedType,
    )
    .filter((timeline) =>
      timeline.matchFriend.name.toLowerCase().includes(search.toLowerCase()),
    );

  return (
    <div className="my-20 px-5 space-y-5">
      <h1 className="text-4xl text-center md:text-left font-bold">Timeline</h1>

      <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
        <div className="dropdown dropdown-bottom mt-10">
          <div
            tabIndex={0}
            role="button"
            className="btn font-normal text-black/50 gap-5 rounded-lg border border-base-300 px-2 py-3 m-1 flex justify-between items-center"
          >
            <span className="text-xl"> {selectedType}</span>
            <MdKeyboardArrowDown className="text-2xl" />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => handlerClick("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handlerClick("call")}>
              <a>Call</a>
            </li>
            <li onClick={() => handlerClick("text")}>
              <a>Text</a>
            </li>
            <li onClick={() => handlerClick("video")}>
              <a>Video</a>
            </li>
          </ul>
        </div>

        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search friends..."
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>

      {filteredTimelines.length === 0 ? (
        <div className="min-h-100 flex items-center justify-center px-4 py-12">
          <div className="max-w-md w-full text-center">
            <div className="relative mx-auto w-16 h-16 mb-8">
              <div className="relative w-16 h-16 bg-base-200 border-4 border-base-300 rounded-full flex items-center justify-center">
                <FaRegClock className="text-4xl text-base-content/40" />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-base-content mb-2">
              No timelines yet
            </h3>

            <p className="text-base-content/70 mb-8 ">
              Your timeline is empty. Start adding important timelines or
              timelines to see them appear here.
            </p>
          </div>
        </div>
      ) : (
        <div className="">
          <div className=" space-y-4">
            {
              filteredTimelines.map((timeline, ind) => (
                <TimelineCard key={ind} timeline={timeline} />
              ))

              //  { console.log(timeline);}
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;

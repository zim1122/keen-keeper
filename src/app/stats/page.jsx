"use client";
import { TimelineContext } from "@/lib/contexts/TimelineContextProvider";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const { timelines } = useContext(TimelineContext);
  const filteredCall = timelines.filter((timeline) => timeline.type === "call");
  const filteredVideo = timelines.filter(
    (timeline) => timeline.type === "video",
  );
  const filteredText = timelines.filter((timeline) => timeline.type === "text");

  const data = [
    { name: "Call", value: filteredCall.length, fill: "#0088FE" },
    { name: "Video", value: filteredVideo.length, fill: "#FF8042" },
    { name: "Text", value: filteredText.length, fill: "#244D3F" },
  ];

  return (
    <div className="my-10 px-5">
      <h1 className="font-bold text-2xl sm:text-3xl mg:text-4xl lg:text-5xl">Friendship Analytics</h1>

      <div className="shadow-sm border border-base-300 rounded-lg p-5 my-10 space-y-5">
        <h2 className="text-xl sm:text-2xl text-black/80">By Interaction Type</h2>
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            margin: "auto",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend  />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default StatsPage;

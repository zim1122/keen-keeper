"use client";
import React, { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineContextProvider = ({ children }) => {
  const [timelines, setTimelines] = useState([]);
  const [selectedType, setSelectedType] = useState("All");

  const value = {
    timelines,
    setTimelines,
    selectedType,
    setSelectedType,
  };

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineContextProvider;

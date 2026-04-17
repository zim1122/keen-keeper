import React from "react";

const FriendInfoCards = () => {
  return (
    <div className="px-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 lg:gap-15 xl:gap-20">
      <div className="card bg-base-100 justify-center border border-base-200 items-center shadow-sm">
        <div className="p-10 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#244D3F]">10</h2>
          <p className="text-gray-500">Total Friends</p>
        </div>
      </div>
      <div className="card bg-base-100 justify-center items-center shadow-sm border border-base-200">
        <div className="p-10 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#244D3F]">3</h2>
          <p className="text-gray-500">On Track</p>
        </div>
      </div>
      <div className="card bg-base-100 justify-center items-center shadow-sm border border-base-200">
        <div className="p-10 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#244D3F]">6</h2>
          <p className="text-gray-500">Need Attention</p>
        </div>
      </div>
      <div className="card bg-base-100 justify-center items-center shadow-sm border border-base-200">
        <div className="p-10 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#244D3F]">12</h2>
          <p className="text-gray-500">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default FriendInfoCards;

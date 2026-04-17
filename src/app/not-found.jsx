"use client";

import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="max-h-screen bg-base-100 flex items-center justify-center my-10  px-4 py-12">
      <div className="max-w-lg w-full text-center">
        <div className=" mb-8">
          <h1 className="text-7xl md:text-9xl font-bold text-base-300  select-none">
            404
          </h1>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-base-content mb-4">
          Page Not Found
        </h2>

        <p className="text-base-content/70 text-lg mb-10 max-w-sm mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="btn btn-primary  gap-3 shadow-md "
          >
            <FaHome className="text-xl" />
            Back to Home
          </button>

          <Link href={"/"}>
            <button className="btn btn-outline  gap-3 hover:bg-base-200">
              <FaSearch className="text-xl" />
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

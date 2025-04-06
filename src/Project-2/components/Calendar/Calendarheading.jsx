import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
function Calendarheading() {
  return (
    <div className="flex items-center justify-between  bg-slate-100 pt-3 rounded-lg pb-2 mt-3">
      <div className="flex  ">
        <h2 className="text-2xl pr-1 pl-2 ">
          <FaRegCalendarAlt />
        </h2>
        <p className="text-xl flex">
          Monday,14 October 2025{" "}
          <span className="text-xl pl-1">
            <FaAngleDown />
          </span>
        </p>
      </div>
      <h2 className="flex gap-2  pr-2">
        <FaArrowLeft />
        <FaArrowRight />
      </h2>
    </div>
  );
}

export default Calendarheading;

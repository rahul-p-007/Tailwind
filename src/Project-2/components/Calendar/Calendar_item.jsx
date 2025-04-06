import React from "react";

function Calendar_item({ logo, title, active, session }) {
  return (
    <div className="flex border-b pb-1 w-[610px] ">
      <div className="flex flex-col gap-1 ">
        <h2 className="pt-3 text-[16px]">11:30 AM</h2>
        <p className="text-[12px] text-gray-400">11:30 AM</p>
      </div>
      <div className="w-[2px] bg-blue-400 p-0 mt-[8px] ml-[9px] h-12 mr-[6px]"></div>
      <div className="cursor-pointer">
        <h4 className="text-gray-400 text-xs pt-2 flex items-center gap-1">
          {session}{" "}
          <span className={active ? "text-red-500" : "text-blue-500"}>
            {logo}
          </span>
        </h4>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Calendar_item;

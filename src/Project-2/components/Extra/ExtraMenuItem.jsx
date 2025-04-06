import React from "react";

function ExtraMenuItem({ logo, title }) {
  return (
    <div className="flex items-center flex-col">
      <div className="bg-blue-600 p-3 rounded-lg">
        <h3>{logo}</h3>
      </div>
      <h5 className="text-[11px] pt-2 text-gray-500 w-32 ">{title}</h5>
    </div>
  );
}

export default ExtraMenuItem;

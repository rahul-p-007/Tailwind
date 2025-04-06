import React from "react";

function MenuItem({ title, menu_icon }) {
  return (
    <div
      className="group flex items-center justify-between  pt-2 pl-2
       pr-1 pb-2 hover:bg-blue-100 transition-all duration-300 ease-in rounded-md m-2
       w-70 cursor-pointer
    "
    >
      <h3 className="text-lg text-gray-400 group-hover:text-blue-950 duration-300 ease-in">
        {title}
      </h3>
      <h4 className="text-lg text-gray-400 group-hover:text-blue-950 duration-300  ease-in">
        {menu_icon}
      </h4>
    </div>
  );
}

export default MenuItem;

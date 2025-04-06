import React from "react";
import { GrCloudComputer } from "react-icons/gr";
import userImage from "../../assets/user.png";

function Header() {
  return (
    <header
      className="flex items-center justify-between 
     "
    >
      <div className="text-2xl text-cyan-400 bg-cyan-950 p-1 flex items-center justify-center m-3 gap-1 rounded-md">
        <GrCloudComputer />
        <h3 className="text-xl">
          webinar<span className="text-white">.gg</span>
        </h3>
      </div>
      <div className="w-9 rounded-full">
        <img src={userImage} alt="" />
      </div>
    </header>
  );
}

export default Header;

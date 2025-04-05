import React from "react";
import { GrCloudComputer } from "react-icons/gr";
function Header() {
  return (
    <header className="flex items-center justify-center">
      <span className="text-sky-400 pr-2 text-xl">
        <GrCloudComputer />
      </span>
      <h3 className="text-sky-500 text-3xl">
        Webinar<span className="text-white">.gg</span>
      </h3>
    </header>
  );
}

export default Header;

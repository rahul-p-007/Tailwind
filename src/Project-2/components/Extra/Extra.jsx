import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import ExtraMenuItem from "./ExtraMenuItem";

function Extra() {
  return (
    <div className="col-span-2 m-9 relative top-36 h-64 rounded-lg border">
      <div className="grid grid-cols-2 gap-8 place-items-center m-8">
        <ExtraMenuItem
          logo={<FaRegCalendarAlt />}
          title={"Schedule a webinar"}
        />
        <ExtraMenuItem
          logo={<FaRegCalendarAlt />}
          title={"Schedule a webinar"}
        />
        <ExtraMenuItem
          logo={<FaRegCalendarAlt />}
          title={"Schedule a webinar"}
        />
      </div>
    </div>
  );
}

export default Extra;

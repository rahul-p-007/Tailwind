import React from "react";
import Calender_Header from "./Calender_Header";
import Calenderheading from "./Calendarheading";
import { MdEmergencyRecording } from "react-icons/md";
import Calendar_item from "./Calendar_item";

function Calender() {
  return (
    <div className="col-span-4  mt-5 ml-3">
      <div className="mt-20 pl-3 ">
        <Calender_Header />
        <div className="border p-2 bg-white rounded-lg mt-7">
          <Calenderheading />
          <Calendar_item
            logo={<MdEmergencyRecording />}
            title={"UX Webinar"}
            active={true}
            session={"Live"}
          />
          <Calendar_item
            logo={<MdEmergencyRecording />}
            title={"My first Webinar"}
            active={false}
            session={"Upcoming"}
          />
          <Calendar_item
            logo={<MdEmergencyRecording />}
            title={"Important Webinar"}
            active={false}
            session={"Upcoming"}
          />
          <Calendar_item
            logo={<MdEmergencyRecording />}
            title={"Webinar 1"}
            active={false}
            session={"Upcoming"}
          />
        </div>
      </div>
    </div>
  );
}

export default Calender;

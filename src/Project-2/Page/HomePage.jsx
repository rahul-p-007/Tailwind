import React from "react";
import Siderbar from "../components/Siderbar/Siderbar";
import Card from "../components/Card/Card";
import Calender from "../components/Calendar/Calender";
import Extra from "../components/Extra/Extra";
function HomePage() {
  return (
    <div className="grid grid-cols-10 w-full ">
      <Siderbar />
      <Card />
      <Calender />
      <Extra />
    </div>
  );
}

export default HomePage;

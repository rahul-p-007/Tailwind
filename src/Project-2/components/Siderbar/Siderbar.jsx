import React from "react";
import Header from "../Header";
import MenuItem from "../MenuItem/MenuItem";

import { FaHome } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaUserLock } from "react-icons/fa";

function Siderbar() {
  return (
    <div className="col-span-2  ">
      <Header />
      <MenuItem title={"Menu"} menu_icon={<FaHome />} />
      <MenuItem title={"Webinars"} menu_icon={<FaPeopleLine />} />
      <MenuItem title={"Billing"} menu_icon={<FaMoneyBillTrendUp />} />
      <MenuItem title={"User Management"} menu_icon={<FaUserLock />} />
      <MenuItem title={"Settings"} menu_icon={<IoMdSettings />} />
    </div>
  );
}

export default Siderbar;

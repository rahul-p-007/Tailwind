import React from "react";
import UserImage from "../../../assets/user.png";
function Card() {
  return (
    <div className="col-span-2 bg-slate-300 rounded-xl mt-10 ml-7  h-[330px]">
      <div className="flex flex-col items-center justify-center  pt-8 ">
        <div
          className="w-32
        "
        >
          <img src={UserImage} alt="" />
        </div>
        <div className="pt-2 text-gray-700 text-[16px] ">
          <h2 className="text-2xl font-bold">User Name</h2>
          <p>user@gmail.com</p>
          <p className="text-[13px] text-center">1XXXXXXXXXX</p>
          <div className="pt-5">
            <p>Address,Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

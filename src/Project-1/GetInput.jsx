import React from "react";

function GetInput({ data, handleonChange }) {
  return (
    <input
      type="text"
      placeholder="Your Birth Year"
      className="w-72 bg-gray-200  rounded-md p-2 outline-none"
      value={data}
      onChange={handleonChange}
    />
  );
}

export default GetInput;

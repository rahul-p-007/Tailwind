import React from "react";

function Button({ disabled, children, onClick }) {
  return (
    <button
      className={`w-72 ${
        disabled ? "bg-gray-400 text-white" : "bg-white text-gray-400"
      } rounded-md p-2 outline-none`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

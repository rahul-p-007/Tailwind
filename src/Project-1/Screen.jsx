import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import Para from "./Para";
import GetInput from "./GetInput";
import Otp from "./Otp";
function Screen() {
  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState("");
  const handleClick = () => {
    setDisabled((e) => !e);
  };
  const handleonChange = (e) => {
    setData(() => e.target.value);
    console.log(data);
  };
  return (
    <div className="flex flex-col items-center justify-around gap-24 pt-6">
      <Header />
      <div>
        <h2 className="text-white text-3xl">Verify Your Age</h2>
      </div>
      <div className="">
        <Para>
          Please confirm your birth year. This date will not be stored
        </Para>
        <div className="flex items-center justify-between flex-col gap-5">
          {/* <GetInput data={data} handleonChange={handleonChange} /> */}
          <Otp />
          <Button disabled={disabled} onClick={handleClick}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Screen;

import React, { useRef, useState } from "react";

function Otp() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  return (
    <div className="flex">
      <SubOtpBox reference={ref1} onDone={() => ref2.current.focus()} />
      <SubOtpBox reference={ref2} onDone={() => ref3.current.focus()} />
      <SubOtpBox reference={ref3} onDone={() => ref4.current.focus()} />
      <SubOtpBox reference={ref4} onDone={() => ref5.current.focus()} />
      <SubOtpBox reference={ref5} onDone={() => ref6.current.focus()} />
      <SubOtpBox reference={ref6} />
    </div>
  );
}

function SubOtpBox({ reference, onDone }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;

    if (/^\d?$/.test(input)) {
      setValue(input);
      if (input && onDone) {
        onDone();
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        maxLength={1}
        value={value}
        onChange={handleChange}
        ref={reference}
        className="w-[40px] h-[50px] rounded-xl bg-blue-500 m-1 outline-none text-white text-center text-2xl"
      />
    </div>
  );
}

export default Otp;

import React from "react";

function Appv1() {
  return (
    <div>
      <GridElement />
    </div>
  );
}

export default Appv1;
function FlexElement() {
  return (
    <div className="bg-blue-300 flex gap-2  justify-around">
      <div className="bg-red-400">Child 1</div>
      <div className="bg-green-300">Child 2</div>
      <div className="bg-violet-300">Child 4</div>
    </div>
  );
}
function GridElement() {
  return (
    <div
      className="sm:grid sm:rounded-md grid-cols-12 inline  m-5
    "
    >
      <div className="bg-red-400 col-span-5 text-2xl">Child 1</div>
      <div className="bg-green-300 col-span-5">Child 2</div>
      <div className="bg-violet-300 col-span-2">Child 4</div>
    </div>
  );
}

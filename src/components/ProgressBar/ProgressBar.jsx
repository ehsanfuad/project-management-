import React from "react";
import { convertToPersianNumbers } from "../../data/data";
const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full h-6 bg-gray-200 rounded-lg overflow-hidden">
      <div
        className="h-full bg-lime-600 transition-all ease-in-out text-lime-950 flex flex-row items-center justify-center"
        style={{ width: `${percentage}%` }}
      >{`${convertToPersianNumbers(percentage)}%`}</div>
    </div>
  );
};

export default ProgressBar;

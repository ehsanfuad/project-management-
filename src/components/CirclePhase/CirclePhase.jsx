import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
function CirclePhase({ state }) {
  if (state) {
    return (
      <div className="p-1 bg-green-700 rounded-full">
        <BsCheckLg className="text-green-100" size={18} />
      </div>
    );
  } else {
    return (
      <div className="p-1.5 bg-yellow-400 rounded-full">
        <GrInProgress className="text-white" />
      </div>
    );
  }
}

export default CirclePhase;

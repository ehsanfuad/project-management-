import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
function TrueFalse({ state }) {
  if (state) {
    return (
      <div className="flex items-center justify-center w-8 p-1 py-1.5 rounded-full bg-lime-300 text-green-800">
        <AiOutlineCheck size={20} />
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center w-8 p-1 py-1.5 rounded-full bg-red-300 text-red-800">
        <VscChromeClose size={20} />
      </div>
    );
  }
}

export default TrueFalse;

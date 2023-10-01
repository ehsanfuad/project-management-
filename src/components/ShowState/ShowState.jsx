import React from "react";
import { IoIosCloudy } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
function ShowState({ state }) {
  switch (state) {
    case 1:
      return (
        <div className="font-iransansBold bg-fuchsia-800 text-fuchsia-200 px-2 rounded-full flex flex-row items-center gap-2">
          <IoIosCloudy size={20} />
          شروع نشده
        </div>
      );
    case 2:
      return (
        <div className="font-iransansBold bg-blue-800 text-blue-200 px-2 rounded-full flex flex-row items-center gap-2">
          <FaLaptopCode size={20} />
          در حال انجام
        </div>
      );
    case 3:
      return (
        <div className="font-iransansBold bg-green-800 text-green-200 px-2 rounded-full flex flex-row items-center gap-2">
          <BsCheckCircleFill size={20} />
          پایان یافته
        </div>
      );
    case 4:
      return (
        <div className="font-iransansBold bg-red-800 text-red-200 px-2 rounded-full flex flex-row items-center gap-2">
          <MdCancel size={20} />
          لغو شده
        </div>
      );
  }
}

export default ShowState;

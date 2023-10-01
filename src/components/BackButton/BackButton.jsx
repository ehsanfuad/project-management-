import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function BackButton({ title, backUrl }) {
  const navigate = useNavigate();
  return (
    <div className="w-fit flex flex-row ">
      <div
        className="flex flex-row items-center gap-3 rounded-md py-3 px-5 bg-white hover:cursor-pointer"
        onClick={() => navigate("/projects")}
      >
        <p className="font-iransansMedium text-lime-600">بازگشت</p>
        <div className="text-lime-600">
          <BsArrowLeft />
        </div>
      </div>
    </div>
  );
}

export default BackButton;

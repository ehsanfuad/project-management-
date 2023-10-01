import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import { Divider } from "@mui/material";
function ProjectHeader({ title }) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex justify-end">
        <BackButton />
      </div>
      <div className="flex flex-row justify-center items-center">
        <p className="font-iransansBlack text-2xl">{title}</p>
      </div>
      <Divider sx={{ borderBottomWidth: 3, borderColor: "black" }} />
    </div>
  );
}

export default ProjectHeader;

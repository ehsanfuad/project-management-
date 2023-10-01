import { Divider } from "@mui/material";
import React from "react";

function InfoColumn({ info }) {
  return (
    <>
      {info.map((item, index) => (
        <div className="flex flex-row gap-2">
          <div
            className={`w-4/12 font-iransans h-8 text-xs my-1 pr-2 flex items-center flex-wrap  ${
              index % 2 == 0
                ? `bg-lime-700 text-lime-50`
                : `bg-lime-300 text-lime-950`
            }  rounded line-clamp-3`}
          >
            {item.name}
          </div>
          <div
            className={`w-8/12 h-8 text-sm my-1 flex items-center bg-gradient-to-r ${
              index % 2 == 0
                ? `from-lime-950 to-lime-700 text-lime-50`
                : `from-lime-700 to-lime-300 text-lime-950`
            }  pr-1 rounded`}
          >
            {item.value}
          </div>
        </div>
      ))}
    </>
  );
}

export default InfoColumn;

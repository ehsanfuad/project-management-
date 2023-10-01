import React from "react";
import { earningData } from "../../data/data";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CardSummery() {
  return (
    <div className="flex flex-row justify-center gap-2 ">
      {earningData.map((item, index) => (
        <Link to={item.path}>
          <div
            key={index}
            className="rounded-2xl shadow-md shadow-lime-200 border-2 p-4 pt-9 md:w-56 dark:bg-secondary-dark-bg
          dark:text-gray-200"
          >
            <button
              type="button"
              className="text-2xl p-4 opacity-90 rounded-full hover:drop-shadow-xl"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span
                className={`ml-2 text-green-800 font-iransans font-semibold text-sm text-${item.pcColor}`}
              >
                {item.percentage}
              </span>
            </p>
            <p className="text-sm font-iransansMedium text-green-700 font-bold mt-1">
              {item.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardSummery;

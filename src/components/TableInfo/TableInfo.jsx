import React from "react";
import TrueFalse from "../TrueFalse/TrueFalse";
import { Modal } from "@mui/material";
import ShowImage from "../ShowImage/ShowImage";

function TableInfo({
  setActive,
  active,
  tableInfo,
  handleOpen,
  indexFile,
  handleClose,
  open,
}) {
  return (
    <>
      {tableInfo.map((item, index) => (
        <div
          onClick={() => setActive({ ...item, index })}
          className={`cursor-pointer flex flex-row items-center my-1 ${
            index === active.index
              ? `bg-gradient-to-r from-lime-700 to-lime-900 text-white`
              : `bg-gradient-to-r from-gray-200 to-zinc-100`
          }   justify-between   rounded py-1`}
        >
          <div className="flex gap-3 ">
            <div className="w-5 flex justify-center items-center text-sm ">
              {index + 1}
            </div>
            <div>{item.name}</div>
          </div>
          <div className="w-6 ml-3">
            <TrueFalse state={item.state} />
          </div>
        </div>
      ))}
      {active?.files > 0 ? (
        <Modal onClose={handleClose} open={open}>
          {<ShowImage image={active.files[indexFile].file} />}
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}

export default TableInfo;

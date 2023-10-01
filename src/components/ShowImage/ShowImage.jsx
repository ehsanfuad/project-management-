import { Box } from "@mui/material";
import React from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function ShowImage({ image }) {
  return (
    <Box sx={style}>
      <div className="w-full h-full">
        <img style={{ width: "100%", height: "100%" }} src={image} alt="" />
      </div>
    </Box>
  );
}

export default ShowImage;

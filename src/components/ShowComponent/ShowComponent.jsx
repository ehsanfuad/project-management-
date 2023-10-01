import { Box } from "@mui/material";
import React from "react";
const style = {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: 500,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function ShowComponent({ componentToShow, setOpenMoreStaticInfo }) {
  return (
    <Box bgcolor="lightgray" sx={style}>
      {componentToShow}
    </Box>
  );
}

export default ShowComponent;

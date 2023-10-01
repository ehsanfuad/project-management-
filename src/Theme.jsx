import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#65a30d",
    },
  },
  typography: {
    fontFamily: "iransans",
    subtitle1: {
      fontFamily: "iransansLight",
    },
    subtitle2: {
      fontFamily: "iransansUltraLight",
    },
    body1: {
      fontFamily: "iransansMedium",
    },
    body2: {
      fontFamily: "iransansBold",
    },
    caption: {
      fontFamily: "iransansBlack",
    },
  },
});

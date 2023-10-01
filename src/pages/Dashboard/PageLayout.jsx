import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { theme } from "../../Theme";
import Menu from "../../components/Menu/Menu";
function PageLayout() {
  return (
    <Container maxWidth="xl" px={2}>
      <Box display="flex" flexDirection="row" gap={2} mt={3}>
        <Box
          flex={1}
          border={1}
          borderRadius={2}
          borderColor={theme.palette.grey[300]}
          // sx={{ height: "fit-content" }}
        >
          <Menu />
        </Box>
        <Box
          flex={3}
          // border={1}
          borderRadius={2}
          borderColor={theme.palette.grey[300]}
          order={0}
          sx={{ height: "fit-content" }}
        >
          {<Outlet />}
        </Box>
      </Box>
    </Container>
  );
}

export default PageLayout;

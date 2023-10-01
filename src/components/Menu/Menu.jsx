import { Box, Divider, Link, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { VscProject } from "react-icons/vsc";
import { GrProjects } from "react-icons/gr";
import { AiFillFile } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { theme } from "../../Theme";
import police from "../../data/police.png";

const items = [
  {
    icon: <VscProject size={22} />,
    title: "خلاصه فعالیت ها",
    path: "/",
  },
  {
    icon: <GrProjects size={22} />,
    title: "پروژه ها",
    path: "/projects",
  },
  {
    icon: <AiFillFile size={22} />,
    title: "فایل ها",
    path: "/files",
  },
];
function checkExistOrnot(active, itemPath) {
  return active === itemPath ? true : false;
  // if (active === "") {
  //   if (active.indexOf(itemPath) >= 0) return true;
  // } else {
  //   return active === itemPath ? true : false;
  // }
}

function Menu() {
  const [active, setActive] = useState(items[0].path);
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  return (
    <Box display="flex" flexDirection="column">
      <div className="bg-lime-600 text-lime-100 w-full flex flex-row align-middle items-center gap-2 rounded-md">
        <img src={police} className="w-20" />
        <Typography>مدیریت کنترل پروژه فاوا</Typography>
      </div>
      {items.map((item, index) => (
        <Box key={index}>
          <Divider
            sx={{
              marginX: 0,
              display: index === 0 && biggerThanMd ? "none" : "block",
            }}
          />
          <Link
            to={item.path}
            component={RouterLink}
            underline="none"
            key={index}
            color="inherit"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              py={1}
              px={2}
              marginY={1}
              borderRight={
                biggerThanMd && checkExistOrnot(active, item.path) ? 5 : 0
              }
              borderColor={theme.palette.primary.main}
              onClick={() => {
                setActive(item.path);
              }}
            >
              <Box display="flex" gap={2} alignItems="center">
                <Box>{item.icon}</Box>
                <Typography
                  fontSize="0.8rem"
                  variant={
                    checkExistOrnot(active, item.path) ? "body2" : "subtitle1"
                  }
                  color={theme.palette.grey[800]}
                >
                  {item.title}
                </Typography>
              </Box>
              <Box
                color={theme.palette.grey[500]}
                display={biggerThanMd ? "none" : "block"}
              >
                <BiChevronLeft size={22} />
              </Box>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default Menu;

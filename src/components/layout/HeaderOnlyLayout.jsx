import { Box } from "@mui/material";
import React from "react";
import { Line } from "../../styles/home";
import { Header } from "./component/header";

const HeaderOnlyLayout = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Header />
      <Line />
      {children}
    </Box>
  );
};

export default HeaderOnlyLayout;

import { Box, Container, styled } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "./component/header";
import Footer from "./component/footer";
import { BackGroundOverLay, Line } from "../../styles/home";


const MainLayout = () => {
  
  return (
    <Box
      sx={{
        position: "relative",
        height: "2000px",
      }}
    >
      <BackGroundOverLay/>
      <Header />
      <Line/>
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;

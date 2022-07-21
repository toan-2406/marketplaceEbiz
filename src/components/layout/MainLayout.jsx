import { Box, Container, styled } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "./component/header";
import Footer from "./component/footer";
import bgmain from "../../assets/images/bg-main.png";

const MainLayout = () => {
  const BackGroundOverLay = styled("div")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${bgmain})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: -1,
    maxHeight: "986px",
    width: "100%",
  }));

  const Line = styled("div")(({ theme }) => ({
    background:
      "linear-gradient(266.64deg, #88069d2b -0.29% , #d7003a24 99.71%)",
    height: "1px",
    width: "100%",
  }));
  return (
    <Box
      sx={{
        position: "relative",
        height: "2000px",
      }}
    >
      <BackGroundOverLay></BackGroundOverLay>
      <Header />
      <Line></Line>
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;

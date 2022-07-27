import { Box, Divider } from "@mui/material";
import { Outlet } from "react-router-dom";

import {Header} from "./component/header";
import Footer from "./component/footer";
import { BackGroundOverLay, Line } from "../../styles/home";


const MainLayout = () => {
  
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <BackGroundOverLay/>
      <Header />
      <Line/>
      <Outlet />
      <Divider variant="fullWidth" sx={{
        background: "rgba(255,255,255,0.3)",
      }}/>

      <Footer />
    </Box>
  );
};

export default MainLayout;

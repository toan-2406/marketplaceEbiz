import { Box, Divider } from "@mui/material";

import {Header} from "./component/header";
import Footer from "./component/footer";
import { BackGroundOverLayPage, Line } from "../../styles/home";


const MainLayout = ({children}) => {
  
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <BackGroundOverLayPage />
      <Header />
      <Line/>
      {children}
      <Divider variant="fullWidth" sx={{
        background: "rgba(255,255,255,0.3)",
      }}/>

      <Footer />
    </Box>
  );
};

export default MainLayout;

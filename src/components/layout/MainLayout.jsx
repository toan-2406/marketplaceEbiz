import { Box, Container } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./component/header";
import Footer from "./component/footer";
import bgmain from "../../assets/images/bg-main.png";

const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${bgmain})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Header />

      <Outlet />

      <Footer />
    </Box>
  );
};

export default MainLayout;

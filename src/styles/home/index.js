import { Container, Typography,Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import bgmain from "../../assets/images/bg-main.png";

export const WrapperContainer = styled(Container)(({ theme }) => ({
  maxwidth: 1200,
  margin: "0 auto",
  padding: "30px",
}));

export const TitleSection = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "28px",
  color: Colors.textWhite,
  marginBottom: "40px",
}));
export const BackGroundOverLay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${bgmain})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  zIndex: -1,
  maxHeight: "996px",
  width: "100%",
}));
export const BackGroundSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bgmain})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  zIndex: -1,
  width: "100%",
}));

export const Line = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(266.64deg, #88069d2b -0.29% , #d7003a24 99.71%)",
  height: "1px",
  width: "100%",
}));
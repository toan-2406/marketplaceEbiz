import { Container, Typography,Box, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import bgmain from "../../assets/images/bg-main.png";
import bgmain1 from "../../assets/images/bg-main2.png";
import bgpage from "../../assets/images/bg-page.png";

export const WrapperContainer = styled(Container)(({ theme }) => ({
  maxWidth: 1200,
  margin: "0 auto",
  padding: '1rem',
  [theme.breakpoints.up("md")]: {
    padding: '24px',
  },
}));
export const ContainerFull = styled(Box)(({ theme }) => ({
  maxWidth: 1750,
  margin: "0 auto",
  padding: '1rem',
  [theme.breakpoints.up("md")]: {
    padding: '24px',
  },
}));


export const TitleFooter = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "18px",
  color: Colors.textWhite,
}));
export const LinkFooter = styled(Link)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "14px",
  color: Colors.body,
  textDecoration: "none",
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
  maxHeight: '1076px',
  width: "100%",
}));
export const BackGroundOverLay1 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${bgmain1})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  zIndex: -1,
  maxHeight: '1076px',
  width: "100%",
}));
export const BackGroundOverLayFull = styled("div")(({ theme }) => ({
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
  height: "100%",
  width: "100%",
}));
export const BackGroundOverLayPage = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${bgpage})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  zIndex: -1,
  height: "100%",
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
export const Line2 = styled("div")(({ theme }) => ({
  backgroundColor:"rgba(255, 255, 255, 0.2)",
  height: "1px",
  width: "100%",
}));

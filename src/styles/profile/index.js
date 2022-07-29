import { Box, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const LinkCustom = styled(Link)(({ theme }) => ({
  color: "#0085FF",
  textDecoration: "none",
  "&::before": {
    content: '"\\2190"',
    marginRight: "5px",
    paddingBottom: "2px",
  },
  "&:hover": {
    color: "#0085FF",
    textDecoration: "none",
  },
}));
export const EditPhotoContainer = styled(Box)(({ theme }) => ({
  background: "#B6BDCB",
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const EditPhotoWrapper = styled(Button)(({ theme }) => ({
    background: Colors.gradientColor,
    width: 164,
    height: 164,
    padding: 2,
  }));
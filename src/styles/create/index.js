
import { Box, Button, Typography } from "@mui/material";
import { styled,alpha } from "@mui/material/styles";
import { Colors } from "../theme";

export const UploadComponent = styled(Button)(({ theme }) => ({
    background: Colors.gradientColor,
    border: '2px dashed #1a1a1a',
    borderRadius: '25px',
    width: '300px',
    height: '250px',
}));

export const TitleInput = styled(Typography)(({ theme }) => ({
    color: Colors.textWhite,
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '20px',
}));
export const InputNomal = styled(Box)(({ theme }) => ({
    position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  // background: theme.palette.common.white,
  backgroundBlendMode: "soft-light",
  boxShadow:
    "0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08)",
  backdropFilter: " blur(70px)",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));
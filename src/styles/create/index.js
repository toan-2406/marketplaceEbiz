
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import border from "../../assets/images/create/borderupload.png";
import { Colors } from "../theme";

export const UploadComponent = styled(Button)(({ theme }) => ({
    background: 'url(' + border + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '273px',
    height: '199px',
}));

export const TitleInput = styled(Typography)(({ theme }) => ({
    color: Colors.textWhite,
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '16px',
    lineHeight: '28px',
}));
export const Subtitle = styled(Typography)(({theme}) => ({
  color: "#B6BDCB",
  fontWeight: "500",
  lineheight: "22px",
  fontSize: "12px",
  marginBottom:'16px'
}));
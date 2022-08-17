import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../theme";

export const TitleBold = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "28px",
  color: Colors.textWhite,
}));
export const SubTitleBold = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    color: Colors.blackDark1,
  }));

  export const Description = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    color: Colors.body,
  }));
  export const TitleNormal = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    color: Colors.textWhite,
  }));
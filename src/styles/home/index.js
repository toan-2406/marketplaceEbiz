import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

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

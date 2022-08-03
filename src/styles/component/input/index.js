import { Box, Input, Select, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../theme";

export const InputOutline = styled(Input)(({ theme }) => ({
  background: Colors.backgroundInput,
  borderRadius: "8px",
  backgroundClip: "padding-box",
  width: "100%",
  height: "100%",
  padding: "8px 16px",
  zIndex: 1,
  outline: "none",
  "&::after": {
    display: "none",
  },
  "&::before": {
    display: "none",
  },

  "& .MuiInput-input": {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
  },
}));
export const InputContainer = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  height: "44px",
  overflow: "hidden",
  position: "relative",
  background: "transparent",
  border: "1px solid " + Colors.border,
}));
export const InputTextArea = styled(TextField)(({ theme }) => ({
  background: Colors.backgroundInput,
  borderRadius: "8px",
  color: "#fff",
  width: "100%",
  height: "auto",
  outline: "none",
  "&::after": {
    display: "none",
  },
  "&::before": {
    display: "none",
  }
}));
export const InputSelect = styled(Select)(({ theme }) => ({
  background: Colors.backgroundInput,
  borderRadius: "8px",
  color: "#fff",
  width: "100%",
  height: "auto",
  outline: "none",
  "&::after": {
    display: "none",
  },
  "&::before": {
    display: "none",
  },
  '& .MuiSelect-select ': {
    padding: '10px 16px !important'
  },
  '& .MuiOutlinedInput-root ': {
    fill: '#fff',
    '& .MuiSvgIcon-root': {
      fill: '#fff'
    }
  }
}));

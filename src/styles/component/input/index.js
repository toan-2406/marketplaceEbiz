import { Box, Input, Select, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../theme";

export const InputOutline = styled(Input)(({ theme }) => ({
  background: Colors.backgroundInput,
  borderRadius: "8px",
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

  color: Colors.textWhite,
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
   
   '&::placeholder': {
      color: Colors.blackDark1
    }

  
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
  color: Colors.blackDark1,
  width: "100%",
  height: "auto",
  outline: "none",
  "&::after": {
    display: "none",
  },
  "&::before": {
    display: "none",
  },
  "& .MuiOutlinedInput-input": {
    color: Colors.textWhite,
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    '&::placeholder': {
      color: Colors.blackDark1,
    },
  },
  
}));
export const InputSelect = styled(Select)(({ theme }) => ({
  background: Colors.backgroundInput,
  borderRadius: "8px",
 "& .MuiOutlinedInput-input": {
    color: Colors.textWhite,
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    '&::placeholder': {
      color: Colors.blackDark1,
    },
  },
  
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

import { createTheme } from "@mui/material";

export const Colors = {
  primary: "#00bcd4",
  secondary: "#ff9800",
  success: "#00bcd4",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3",
  disabled: "#bdbdbd",
  text: "#212121",
  textWhite: "#E5E9F0",
  textSecondary: "#757575",
  textRed: "#FF2B38",
  textGreen: "#00A40F",
  //Border
  border: "#e0e0e0",
  borderDark: "#bdbdbd",
  //Background
  background: "#fafafa",
  backgroundDark: "#212121",
  //Shadow
  shadow: "rgba(0, 0, 0, 0.2)",
  shadowDark: "rgba(0, 0, 0, 0.4)",
  //Gradient
  gradient: "linear-gradient(to right, #00bcd4, #ff9800)",
  gradientColor: "linear-gradient(45deg, #88069D 0.01%, #D0004B 97.2%)",
  gradientDark: "linear-gradient(to right, #212121, #424242)",
  //white
  white: "#ffffff",
  whiteDark: "#B6BDCB",
  //black
  black: "#000000",
    blackDark1: "#808089",
  blackDark: "#1E1E1E",
  blackCard: "#1C1D21"
};

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: Colors.primary,
      contrastText: Colors.white,
    },
    secondary: {
      main: Colors.secondary,
      contrastText: Colors.white,
    },
    success: {
      main: Colors.success,
      contrastText: Colors.white,
    },
    background: {
      default: Colors.blackDark,
    },
    fontFamily: {
      default: "Montserrat, sans-serif",
    }
  },
  components: {
    MuiButton: {
      root: {
        borderRadius: "4px",
        fontSize: "14px",
        fontWeight: "500",
        textTransform: "none",
        padding: "12px 24px",
        minWidth: "unset",
        height: "unset",
        minHeight: "unset",
        lineHeight: "unset",
        fontFamily: "Roboto, sans-serif",
        fontWeight: "500",
        letterSpacing: "0.02857em",
        textTransform: "none",
        color: Colors.text,
        backgroundColor: Colors.white,
        border: "1px solid " + Colors.border,
        "&:hover": {
          backgroundColor: Colors.white,
          border: "1px solid " + Colors.border,
          color: Colors.text,
        },
        "&:focus": {
          backgroundColor: Colors.white,
          border: "1px solid " + Colors.border,
          color: Colors.text,
        },
      },
    },
    MuiTypography: {
      root: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "500",
        letterSpacing: "0.02857em",
        textTransform: "none",
        color: Colors.white,
      }
    }
    
  },
});

export default theme;

import { createTheme } from "@mui/material";

export const Colors = {
  primary: "#00bcd4",
  secondary: "#ff9800",
  disabled:'#808089',
  invert:'#212529',
  subinvert:'#383A4B',
  note:'#215DEC',
  hyperlink:'#556AEB',
  hyperhover:'#8394FF',
  hyperpressed:'#556AEB',
  success: "#00A40F",
  error: "#D0004B",
  warning: "#FF8C0B",
  info: "#2196f3",
  text: "#212121",
  textWhite: "#E5E9F0",
  textSecondary: "#757575",
  textRed: "#FF2B38",
  textGreen: "#00A40F",
  textBlue: "#0085FF",
  //Border
  border: "#951188",
  borderDark: "#bdbdbd",
  //Background
  background: "#fafafa",
  backgroundDark: "#212121",
  backgroundInput:'rgba(76, 33, 83, 0.25)',
  backgroundCard:'rgba(179, 85, 194, 0.25)',
  //Shadow
  shadow: "rgba(0, 0, 0, 0.2)",
  shadowDark: "rgba(0, 0, 0, 0.4)",
  //Gradient
  gradient: "linear-gradient(to right, #00bcd4, #ff9800)",
  gradientColor: "linear-gradient(45deg, #88069D 0.01%, #D0004B 97.2%)",
  gradientDark: "linear-gradient(to right, #212121, #424242)",
  
  //white
  white: "#ffffff",
  body: "#B6BDCB",
  //black
  black: "#000000",
  blackDark1: "#808089",
  blackDark: "#141414",
  blackCard: "#292b30",
};

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: Colors.primary,
      contrastText: Colors.white,
    },
    secondary: {
      main: Colors.textWhite,
      contrastText: Colors.textWhite
    },
    error: {
      main: Colors.error,
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
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1270,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
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
        letterSpacing: "0.02857em",
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
      },
    },
    MuiTab: {
      root: {
        background: Colors.blackDark,
        color: Colors.white
      },
      indicator: {
        backgroundColor: Colors.error,
        color: Colors.error
      },
    }
  },
});

export default theme;

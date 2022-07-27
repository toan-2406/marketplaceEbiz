import { Tabs, Tab, Box, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../theme";

export const ActionTabs = styled(Tabs)(({ theme }) => ({
  background: "transparent",
  color: Colors.textWhite,
  border: "none",
  "&:hover": {
    background: "transparent",
    color: Colors.textWhite,
    border: "none",
  },
  "&:focus": {
    background: "transparent",
    color: Colors.textWhite,
    border: "none",
  },
  "&:active": {
    background: "transparent",
    color: Colors.textWhite,
    border: "none",
  },
  "&:selected": {
    background: "transparent",
    color: Colors.textWhite,
    border: "none",
  },

    '& .MuiTabs-indicator': {
     width: '50px !important',
     transform: 'translateX(50%) !important',
     background: Colors.gradientColor,
     height: '3px !important',
     borderRadius: '25px !important',
    },

}));
export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
export const ActionTab = styled(Tab)(({ theme }) => ({
  background: "transparent",
  color: "#808089",
  border: "none",
  textTransform: "capitalize",
  "&:hover": {
    background: "transparent",
    color: Colors.textWhite,
    border: "none",
  },
}));
export const TabPanelLayout = styled(Box)(({ theme }) => ({
  color: Colors.textWhite,
  border: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  alignContent: "space-between",
  justifyContent: "flex-start",
  height: "100%",
  maxHeight: "calc(76px * 7 + 28px)",
  rowGap: "28px",
  columnGap: "20px",
  flexWrap: "wrap",
  [theme.breakpoints.down("lg")]: {
    maxHeight: "100%",
    alignContent: "center",
  },
}));
export const TabPanelItem = styled(Box)(({ theme }) => ({
  padding: "18px 19px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "88px",
  borderRadius: "8px",
  backgroundColor: Colors.blackCard,
  columnGap: "10px",
  width: "calc(100% / 3 - 20px )",
  "&:hover": {
    boxShadow: Colors.shadow,
  },
  [theme.breakpoints.down("lg")]: {
    width: "auto",
  },
}));

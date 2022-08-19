import { ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../theme";

export const ListItemItems = styled(ListItemText)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
  color: Colors.blackDark1,
  "& .MuiListItemText-primary": {
    fontWeight: 500,
fontSize: 10,
lineHeight: '15px',
letterSpacing: '0.4px',
textTransform: 'uppercase',
color: Colors.body
  },
  "& .MuiListItemText-secondary": {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '18px',
    color: Colors.textWhite,
  },
}));

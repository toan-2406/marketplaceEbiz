import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import { InputContainer } from "../../styles/component/input";
import { Checkbox, Stack } from "@mui/material";
import Input from "../Input";
import { ButtonContent, ButtonOutline, ColorButton } from "../../styles/component/button";
const blockchain = [
    {
      id: 1,
      name: "Ethereum",
    },
    {
      id: 2,
      name: "Bitcoin",
    },
    {
      id: 3,
      name: "Ethereum Classic",
    },
  ];
  
const data = [
  { icon: <People />, label: "Authentication" },
  { icon: <Dns />, label: "Database" },
  { icon: <PermMedia />, label: "Storage" },
  { icon: <Public />, label: "Hosting" },
];

export default function DropDown(props) {
  const { type } = props;
  const [open, setOpen] = React.useState(true);
  return (
    <InputContainer
      sx={{
        height: open ? "auto" : 44,
        width: "100%",
      }}
    >
      {type === "checkbox" ? (
        <>
          <ListItemButton
            alignItems="flex-start"
            onClick={() => setOpen(!open)}
            sx={{
              //   pb: open ? 0 : 2.5,
              "& svg": { opacity: 1, fill: "#E5E9F0" },
              
            }}
          >
            <ListItemText
              primary="Sale Type"
              primaryTypographyProps={{
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "24px",
                color: "#E5E9F0",
              }}
              sx={{ my: 0 }}
            />
            <KeyboardArrowDown
              sx={{
                mr: -1,
                opacity: 0,
                transform: open ? "rotate(-180deg)" : "rotate(0)",
                transition: "0.2s",
              }}
            />
          </ListItemButton>
          {open &&
            data.map((item) => (
              <ListItem
                key={item.label}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    // onChange={handleToggle(value)}
                    // checked={checked.indexOf(value) !== -1}
                    // inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton
                  sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
        </>
      ) : (
        <>
          <ListItemButton
            alignItems="flex-start"
            onClick={() => setOpen(!open)}
            sx={{
              //   pb: open ? 0 : 2.5,
              "& svg": { opacity: 1, fill: "#E5E9F0" },
            }}
          >
            <ListItemText
              primary="Sale Type"
              primaryTypographyProps={{
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "24px",
                color: "#E5E9F0",
              }}
              sx={{ my: 0 }}
            />
            <KeyboardArrowDown
              sx={{
                mr: -1,
                opacity: 0,
                transform: open ? "rotate(-180deg)" : "rotate(0)",
                transition: "0.2s",
              }}
            />
          </ListItemButton>
          {open &&
            <Box sx={{padding: '12px'}}>
                <Stack direction="row" spacing={1} justifyContent='space-between'>
                <Input
            required={false}
            label="USD"
            select={blockchain}
            sx={{'& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {right:'-2px !important' }}}
            
          />
                    <Input
            required={false}
            placeholder="From"
            type="text"
      
          />
                   <Input
            required={false}
            placeholder="To"
            type="text"
         
          />
                </Stack>
                <Stack direction="row" marginTop={1} spacing={1} justifyContent='space-between'>
            <Box sx={{width:'50%'}}> <ButtonOutline sx={{width:'100%'}}>
              <ButtonContent  sx={{width:'100%',padding:'unset'}}>Clear</ButtonContent>
            </ButtonOutline></Box>
            <Box sx={{width:'50%'}}><ColorButton  sx={{width:'100%',padding:'unset'}}>Apply</ColorButton></Box>
                </Stack>
            </Box>
            }
        </>
      )}
    </InputContainer>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Stack, Checkbox } from "@mui/material";
import { InputContainer } from "../../styles/component/input";
import Input from "../Input";
import {
  ButtonContent,
  ButtonOutline,
  ColorButton,
} from "../../styles/component/button";
import { Colors } from "../../styles/theme";
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

export default function DropDown(props) {
  const { type, children, data, title } = props;
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
              backgroundColor: Colors.backgroundSecondary ,
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
            
          >
            <ListItemText
              primary={title}
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
          {open && <Box>{children}</Box>}
        </>
      ) : type === "normal" ? (
        <>
          <ListItemButton
            alignItems="flex-start"
          
            sx={{
              //   pb: open ? 0 : 2.5,
              "& svg": { opacity: 1, fill: "#E5E9F0" },
              backgroundColor: Colors.backgroundSecondary ,
              borderTopLeftRadius: "8px",
            
            }}
          >
            <ListItemText
              primary={title}
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
                visibility: "hidden",
              }}
            />
          </ListItemButton>
          <Box sx={{ padding: "12px" }}>{children}</Box>
        </>
      ) : (
        <>
          <ListItemButton
            alignItems="flex-start"
            onClick={() => setOpen(!open)}
            sx={{
              //   pb: open ? 0 : 2.5,
              "& svg": { opacity: 1, fill: "#E5E9F0" },
              backgroundColor: Colors.backgroundSecondary ,
             
            }}
          >
            <ListItemText
              primary={title}
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
          {open && (
            <Box sx={{ padding: "12px" }}>
              <Stack direction="row" spacing={1} justifyContent="space-between">
                <Box sx={{width:'calc(100% / 3)'}}>
                <Input
                  required={false}
                  label="USD"
                  select={blockchain}
                  sx={{
                    "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
                      right: "-2px !important",
                    },

                    width: "64px !important",
                  }}
                />
                </Box>
                <Box sx={{width:'calc(100% / 3)'}}>
                <Input required={false} placeholder="From" type="text" />
                </Box>
                <Box sx={{width:'calc(100% / 3)'}}>
                <Input required={false} placeholder="To" type="text" />
                </Box>
              </Stack>
              <Stack
                direction="row"
                marginTop={1}
                spacing={1}
                justifyContent="space-between"
              >
                <Box sx={{ width: "50%",height:{xs:"30px",md:'auto'} }}>
                  {" "}
                  <ButtonOutline sx={{ width: "100%",height:'100%' }}>
                    <ButtonContent sx={{ width: "100%", padding: "unset",height:'100%' }}>
                      Clear
                    </ButtonContent>
                  </ButtonOutline>
                </Box>
                <Box sx={{ width: "50%",height:{xs:"30px",md:'auto'} }}>
                  <ColorButton sx={{ width: "100%",height:'100%', padding: "unset" }}>
                    Apply
                  </ColorButton>
                </Box>
              </Stack>
            </Box>
          )}
        </>
      )}
    </InputContainer>
  );
}

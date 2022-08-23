import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { navbarLink } from "../../assets/data/navbar";
import { Checkbox, ListItem, ListItemText, Stack, Typography,ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { ColorButton } from "../../styles/component/button";
import { Colors } from "../../styles/theme";
import DropDown from "../DropDown/Dropdown";
import { type } from '../../assets/data/global_data'

export default function ToggleDrawer(props) {
  const {setIsOpen, isOpen , type} = props;
  const list = () => (
    <Box
      sx={{ width: {xs:250, sm:500} ,background: Colors.gradientDark,height: "100vh",display: 'flex',flexDirection:'column', gap:'20px', alignItems: "center" ,justifyContent:'center'}}
      role="presentation"
      onClick={() => setIsOpen(false)}
      onKeyDown={() => setIsOpen(false)}

    >

          <Stack spacing={3} direction="column" alignItems={'center'}>
          {navbarLink.map((page, index) => (
            <Typography key={index} >
              <Link
                to={page.path}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1em",
                }}
              >
                {page.name}
              </Link>
            </Typography>
          ))}
          </Stack>
          <Link to="/connect-wallet">
          <ColorButton>Connect wallet</ColorButton>
          </Link>
      
    </Box>
  );
const filter = () => {
  <Stack
            direction={"column"}
            rowGap={2}
            sx={{ position: "sticky", top: 80 }}
          >
            <DropDown type="checkbox" title="Sale type">
              {type.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{ borderTop: "1px solid #88069D", paddingY: "0.5rem" }}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      sx={{
                        color: "#E5E9F0",
                        borderRadius: "6px",
                        fontWeight: "400",
                      }}
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
                      primary={item.name}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </DropDown>
            <DropDown title="Category"/>
            <DropDown type="checkbox" title="Category">
              {type.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{ borderTop: "1px solid #88069D", paddingY: "0.5rem" }}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      sx={{
                        color: "#E5E9F0",
                        borderRadius: "6px",
                        fontWeight: "400",
                      }}
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
                      primary={item.name}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </DropDown>
          </Stack>
}
  return (
    <>
      <SwipeableDrawer
        anchor={type === "filter" ? "bottom" : "right"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        { type === "filter" ? filter() : list() }
      </SwipeableDrawer>
    </>
  );
}

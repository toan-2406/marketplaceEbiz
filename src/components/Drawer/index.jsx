import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { navbarLink } from "../../assets/data/navbar";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ColorButton } from "../../styles/component/button";
import { Colors } from "../../styles/theme";


export default function ToggleSideBar(props) {
  const {setIsOpen, isOpen} = props;
  const list = () => (
    <Box
      sx={{ width: 250 ,background: Colors.gradientDark,height: "100vh",display: 'flex',flexDirection:'column', gap:'20px', alignItems: "center" ,justifyContent:'center'}}
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

  return (
    <>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  );
}

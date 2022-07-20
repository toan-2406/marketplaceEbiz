import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  AppBar,
  Toolbar,
  InputBase,
  Divider,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import assets from "../../../../assets";
import moon from "../../../../assets/images/header/moon.svg";

const navbarLink = [
  {
    name: "Explore",
    path: "/explore",
  },
  {
    name: "Create",
    path: "/create",
  },
  {
    name: "Rankings",
    path: "/rankings",
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  // background: theme.palette.common.white,
  backgroundBlendMode: "soft-light",
  boxShadow:
    "0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08)",
  backdropFilter: " blur(70px)",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60ch",
    },
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  paddingLeft: "20px",
  paddingRight: "20px",
  marginRight: "24.75px",
  color: "#fff",
  background: "linear-gradient(266.64deg, #D7003A -0.29%, #88069D 99.71%)",
  borderRadius: "100px",
  fontSize: "1rem",
  textTransform: "capitalize",
  transition: "0.3s ease",
  whiteSpace: "nowrap",
  "&:hover": {
    background: "linear-gradient(266.64deg, #88069D -0.29% , #D7003A 99.71%)",
  },
}));

export default function Header() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          backgroundImage: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "block", lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ height: "60px", padding: "5px 0" }}>
            <img
              src="https://ebizworldsolutions.com/website-development/img/main/ebizw.png"
              style={{ height: "100%" }}
              alt="log"
            />
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by NFTs, collections, and accounts"
              inputProps={{ "aria-label": "search" }}
              sx={{ width: "40vw" }}
            />
          </Search>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {navbarLink.map((page, index) => (
              <Typography key={index} sx={{ mr:'32px'}}>
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
            <ColorButton>Connect wallet</ColorButton>
              {/* darkmode button */}
          <IconButton
            aria-label="darkmode"
            aria-haspopup="true"
            color="inherit"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <img src={moon} alt="darkmode" />
          </IconButton>
          </Box>
        
        </Toolbar>
      </AppBar>
     <Box sx={{
      background: "linear-gradient(266.64deg, #88069db8 -0.29% , #d7003aa8 99.71%)",
      height: "1px",
     }}></Box>
    </Box>
  );
}

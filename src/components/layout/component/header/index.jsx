import React,{useState} from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  AppBar,
  Toolbar,
  InputBase,
  Button,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import logo from "../../../../assets/images/header/logo.png";

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

const Search = styled(Box)(({ theme }) => ({
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
  width: "40%",
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
      width: "40ch",
    },
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({

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

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "28px" }}>
          <Link to="/">
          <img
            src={logo}
            alt="log0"
          />
          </Link>
        </Box>

        <Search sx={{ml:2, display:{xs:'none',sm:'none',md:'flex'}}}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase 
            placeholder="Search by NFTs, collections, and accounts"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ display: { xs: "none", md: "none",lg:'flex' }, gap:'20px', alignItems: "center" }}>
          <Stack spacing={3} direction="row">
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
          <ColorButton>Connect wallet</ColorButton>
        </Box>
        <IconButton
            size="large"
  
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: "flex",lg:"none", xl: "none" } }}
            onClick={ToggleMenu}
          >
            {
              isOpen ?<CloseIcon/> 
              :<MenuIcon  />
            }
          </IconButton>
      </Toolbar>
    </AppBar>
  );
};

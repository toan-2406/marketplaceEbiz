import React, { useState } from "react";
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
  useMediaQuery,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  CardMedia,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import logo from "../../../../assets/images/header/logo.png";
import { ColorButton } from "../../../../styles/component/button";
import ToggleSideBar from "../../../Drawer";

import { navbarLink } from "../../../../assets/data/navbar";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "40%",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: "40ch",
    [theme.breakpoints.down('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
export const Header = () => {
  const isLogin = useSelector((state) => state.user.value.isLogin);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const navigation = useNavigate();
  const ToggleMenu = () => {
    setIsOpen(true);
  };
  const gotoHomePage = () => {
    navigation("/");
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
        position: "relative",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "28px", cursor: "pointer" }} onClick={gotoHomePage}>
          <CardMedia component={"img"} src={logo} alt="logo" />
        </Box>

        <Search sx={{ ml: 2}}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search by NFTs, collections, and accounts"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box
          sx={{
            display: { xs: "none", md: "none", lg: "flex" },
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Stack spacing={3} direction="row">
            {navbarLink.map((page, index) => (
              <Typography key={index}>
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
          {isLogin ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://shibatoken.com/images/ico-red.svg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Link to="/connect-wallet">
              <ColorButton>Connect wallet</ColorButton>
            </Link>
          )}
        </Box>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { md: "flex", lg: "none", xl: "none" },
            zIndex: "9999",
          }}
          onClick={ToggleMenu}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Toolbar>
      {isTablet && <ToggleSideBar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </AppBar>
  );
};

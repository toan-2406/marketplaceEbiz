import {
  Box,
  Grid,
  IconButton,
  Stack,
  ListItem,
  Checkbox,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import React, { useState, useRef, useEffect, useMemo } from "react";
import CardCollection from "../components/Card/CardCollection";
import Input from "../components/Input";
import { ButtonContent, ButtonOutline } from "../styles/component/button";
import { BackGroundOverLayPage, ContainerFull } from "../styles/home";
import MenuIcon from "@mui/icons-material/Menu";
import DropDown from "../components/DropDown/Dropdown";
import { InputContainer } from "../styles/component/input";
import Tags from "../components/Tags";
import ToggleDrawer from "../components/Drawer";
import {type} from '../assets/data/global_data'
import { TitleBold } from "../styles/component/typography";
import SliderNoneProgessBar from "../components/Slider/SliderNoneProgessBar";
import SliderCollection from "../components/Slider/SliderCollection";
const data = [
  {
    id: 1,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/e488a88498206481dc37e32581204b9b.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 2,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 3,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 4,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 5,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 6,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 7,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 8,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 9,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 10,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 11,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 12,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 13,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 14,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 15,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 16,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 17,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
];
const data1 = [
  {
    id: 1,
    images:{
      avatar: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
  {
    id: 2,
    images:{
      avatar: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
  {
    id: 3,
     images:{
      avatar: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
  {
    id: 4,
    images:{
      avatar: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
  {
    id: 5,
    images:{
      avatar: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
  {
    id: 6,
    images:{
      avatar: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
  {
    id: 7,
     images:{
      avatar: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
];
const tags = [
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
export default function Search() {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const [isOpen, setIsOpen] = useState(isTablet ? false : true);
  const [fixed, setFixed] = useState(false);
  const filterEl = useRef(null);
  //when scroll to the bottom of > 100px, the filter will be fixed
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // //create data limit 12 items
  // const dataLimit = useMemo(() => {
  //   return data.slice(0, 12);
  // }, []);

  return (
    <ContainerFull>
      
      <BackGroundOverLayPage />
      <Box>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          marginBottom={2}
        >
          <InputContainer
            sx={{ position: fixed ? "fixed" : "unset", top: 10,zIndex:999 }}
            ref={filterEl}
          >
            <IconButton
              size="large"
              color="secondary"
              aria-label="menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon />
            </IconButton>
          </InputContainer>
          <Box></Box>
          <Box sx={{ width: 256 }}>
            <Input required={false} label="Recently listed" select={type} />
          </Box>
        </Stack>
      </Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={2.5}
          sx={{
            display: {xs:"none",md:isOpen ? "block" : "none"},
          }}
        >
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
        </Grid>
        <Grid item xs={12} md={isOpen ? 9 : 12} sx={{marginLeft:'auto'}}>
          <Box>
          <Box position="relative" mb={2}>
          <SliderCollection data={data1} col={4} />
          </Box>
            <Stack spacing={2} direction="row" mb={2} alignItems="center">
                {tags.map((item) => (
                  <Box key={item.id}>
                    <Tags  label={item.name} onDelete={item.id}></Tags>
                  </Box>
                ))}
                <TitleBold sx={{ cursor: "pointer"}}>Clear All</TitleBold>
            </Stack>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {data.map((item) => (
                <Grid item xs={12} sm={6} md={isOpen ? 3 : 2} key={item.id}>
                  <CardCollection item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

    </ContainerFull>
  );
}

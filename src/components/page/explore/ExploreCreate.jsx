import { Box, Grid, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonContent, ButtonOutline } from "../../../styles/component/button";
import Input from "../../Input";
import CardCollection from "../../Card/CardCollection";
import { InputContainer } from "../../../styles/component/input";
import SliderCollection from "../../Slider/SliderCollection";
import { TitleBold } from "../../../styles/component/typography";
import { LinkFooter } from "../../../styles/home";
import { Link } from "react-router-dom";
const type = [
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
      "https://lh3.googleusercontent.com/P1WOzkGqp_mU_1jvpFhQnevYKryg0BZbzmuiawx-Xm-5NtuvhWXXPQu5P0llghCzAinhL6iOS8M0wmBLS_naA4d1jsyBTYyXP47br6U=h400",
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
];
const data1 = [
  {
    id: 1,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
  {
    id: 2,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
  {
    id: 3,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
  {
    id: 4,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
  {
    id: 5,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
  {
    id: 6,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
  {
    id: 7,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Collections name",
  },
];
export default function ExploreCreate() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        justifyContent="space-between"
        marginBottom={2}
        flexWrap="wrap"
      >
        <InputContainer mt={{ xs: "10px", sm: 0 }} sx={{ maxWidth: "50px" }}>
          <IconButton
            size="large"
            color="secondary"
            aria-label="menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon />
          </IconButton>
        </InputContainer>
      </Stack>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: isOpen ? "block" : "none",
            position: "sticky",
            top: 0,
          }}
        >
          <Stack rowGap={1}>
            <Input required={false} label="Sale type" select={type} />
            <Input required={false} label="Price" select={type} />
            <Input required={false} label="Background" select={type} />
            <Input required={false} label="Colthes" select={type} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={isOpen ? 10 : 12}>
          <Box mb={2}>
            <TitleBold>My collections <Link to='/'>
            <LinkFooter  sx={{
              color:'#0085FF',marginLeft:'20px',cursor:'pointer'
            }}>View all</LinkFooter></Link> </TitleBold>
          </Box>
          <Box position={"relative"}>
            <SliderCollection data={data1} col={4}/>
          </Box>
          <Box
          my={2}
            sx={{
              maxWidth: { xs: "100%", sm: 256 },
              marginLeft: "auto",
              width: { xs: "100% !important", sm: "auto !important" },
            }}
          >
            <Input required={false} label="Select blockchain" select={type} />
          </Box>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {data.map((item) => (
              <Grid item xs={12} md={isOpen ? 3 : 2} key={item.id}>
                <CardCollection item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

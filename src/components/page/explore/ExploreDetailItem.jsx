import { Box, Grid, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonContent, ButtonOutline } from "../../../styles/component/button";
import Input from "../../Input";
import CardCollection from "../../Card/CardCollection";
import { InputContainer } from "../../../styles/component/input";
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
    collectionID:'0123',
    images: "https://openseauserdata.com/files/e488a88498206481dc37e32581204b9b.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency:'ETH',
    lastPrice: 9,
  },
  {
    id: 2,
    collectionID: '0123',
    images:"https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency:'ETH',
    lastPrice: 9,
  },
  {
    id: 3,
    collectionID: '0123',
    images: "https://lh3.googleusercontent.com/P1WOzkGqp_mU_1jvpFhQnevYKryg0BZbzmuiawx-Xm-5NtuvhWXXPQu5P0llghCzAinhL6iOS8M0wmBLS_naA4d1jsyBTYyXP47br6U=h400",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency:'ETH',
    lastPrice: 9,
  },
  {
    id: 4,
    collectionID: '0123',
    images: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",

    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency:'ETH',
    lastPrice: 9,
  },
  {
    id: 5,
    collectionID: '0123',
    images: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency:'ETH',
    lastPrice: 9,
  },
  {
    id: 6,
    collectionID: '0123',
    images: "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency:'ETH',
    lastPrice: 9,
  },
  {
    id: 7,
    collectionID: '0123',
    images:  "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency:'ETH',
    lastPrice: 9,
  },
];
export default function ExploreDetailItem() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Stack direction={{xs:'column-reverse', sm:'row'}} justifyContent="space-between" marginBottom={2} flexWrap="wrap">
      <InputContainer  mt={{xs:"10px",sm:0}} sx={{maxWidth:'50px'}}>
        <IconButton size="large" color="secondary" aria-label="menu" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </IconButton></InputContainer>
        <Stack direction={{xs:"column",sm:'row'}} spacing={3} alignItems="center" >
          <ButtonOutline sx={{width:{xs:'100% !important',sm:'auto!important'}}}>
            <ButtonContent sx={{ padding: "5px 20px" ,width:{xs:'100% !important',sm:'auto !important'}}}>
              Make collection offer
            </ButtonContent>
          </ButtonOutline>
          <Box sx={{ maxWidth: {xs:'100%', sm:256 },width:{xs:'100% !important',sm:'auto !important'} }}>
            <Input required={false} label="Select blockchain" select={type} />
          </Box>
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2 } sx={{display: isOpen ? 'block' : 'none', position: 'sticky',top: 0 }}>
        <Stack rowGap={1}>
        <Input required={false} label="Sale type" select={type} />
        <Input required={false} label="Price" select={type} />
        <Input required={false} label="Background" select={type} />
        <Input required={false} label="Colthes" select={type} />
        </Stack>
        </Grid>
        <Grid item xs={12} md={isOpen ? 10 : 12 }>
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

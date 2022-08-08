import { Grid, Stack } from "@mui/material";
import React,{useState} from "react";
import CardCollection from "../components/Card/CardCollection";
import Input from "../components/Input";
import { BackGroundOverLayPage, ContainerFull } from "../styles/home";
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
export default function Search() {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <ContainerFull>
        <BackGroundOverLayPage/>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={2.5}
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
        <Grid item xs={12} md={isOpen ? 9.5 : 12}>
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
    </ContainerFull>
  );
}

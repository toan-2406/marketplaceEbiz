import { Box, Grid, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonContent, ButtonOutline } from "../../../styles/component/button";
import Input from "../../Input";
import CardCollection from "../../Card/CardCollection";
import TableTraction from "../../TableList/TableTraction";
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
    status: "Sale",
    name: "CryptoPunks #1",
    price: "0.1 ETH",
    image: "https://openseauserdata.com/files/d32ded460ea85238572ab657783273ed.gif",
    quality: 1,
    from: "H12078",
    to: "Ton.Dev",
    timeTransaction: "2021-09-01T00:00:00.000Z"
  },
  {
    id: 2,
    status: "Transfer",
    name: "CryptoPunks #2",
    price: "0.1 ETH",
    image: "https://openseauserdata.com/files/d32ded460ea85238572ab657783273ed.gif",
    quality: 2,
    from: "H12078",
    to: "Ton.Dev",
    timeTransaction: "2021-09-01T00:00:00.000Z"
  },
  {
    id: 3,
    status: "List",
    name: "CryptoPunks #3",
    price: "0.1 ETH",
    image: "https://openseauserdata.com/files/d32ded460ea85238572ab657783273ed.gif",
    quality: 3,
    from: "H12078",
    to: "Ton.Dev saddsjads",
    timeTransaction: "2021-09-01T00:00:00.000Z"
  },
  {
    id: 4,
    status: "Offer",
    name: "CryptoPunks #4",
    price: "0.1 ETH",
    image: "https://openseauserdata.com/files/d32ded460ea85238572ab657783273ed.gif",
    quality: 4,
    from: "H12078",
    to: "Ton.Dev saddsjads",
    timeTransaction: "2021-09-01T00:00:00.000Z"
  },
  {
    id: 5,
    status: "Collection offers",
    name: "CryptoPunks #5",
    price: "0.1 ETH",
    image: "https://openseauserdata.com/files/d32ded460ea85238572ab657783273ed.gif",
    quality: 5,
    from: "H12078",
    to: "Ton.Dev saddsjads",
    timeTransaction: "2021-09-01T00:00:00.000Z"
  },
];
export default function ExploreDetailActivity() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Stack direction={"row"} justifyContent="space-between" marginBottom={2}>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </IconButton>
     
         
          <Box sx={{ width: 256 }}>
            <Input required={false} label="Last 90 days " select={type} />
          </Box>
     
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2 } sx={{display: isOpen ? 'block' : 'none' }}>
        <Stack rowGap={1}>
        <Input required={false} label="Sale type" select={type} />
        <Input required={false} label="Price" select={type} />
        <Input required={false} label="Background" select={type} />
        <Input required={false} label="Colthes" select={type} />
        </Stack>
        </Grid>
        <Grid item xs={12} md={isOpen ? 10 : 12 }>
          <TableTraction data={data} />
        </Grid>
      </Grid>
    </>
  );
}

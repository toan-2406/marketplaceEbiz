import { Avatar, Box, Grid, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Input from "../../Input";
import TableMain from "../../TableList/TableMain";
import { InputContainer } from "../../../styles/component/input";
import { Subtitle,TitleInput } from "../../../styles/create";
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
    timeTransaction: "2 minutes ago"
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
    timeTransaction: "2 minutes ago"
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
    timeTransaction: "2 minutes ago"
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
    timeTransaction: "2 minutes ago"
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
    timeTransaction: "2 minutes ago"
  },
];
const headCells = [
  {
    id: "status",
    numeric: false,
    disablePadding: true,
    label: "",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Item",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "quantity",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    id: "from",
    numeric: true,
    disablePadding: false,
    label: "From",
  },
  {
    id: "to",
    numeric: true,
    disablePadding: false,
    label: "To",
  },
  {
    id: "time",
    numeric: true,
    disablePadding: false,
    label: "Time",
  },
];
export default function ExploreDetailActivity() {
  const [isOpen, setIsOpen] = useState(true);
  const [seeMore, setSeeMore] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
 const SeeMore = (id) => {
  
 }
  return (
    <>
      <Stack direction={"row"} justifyContent="space-between" marginBottom={2}>
      <InputContainer>
        <IconButton size="large" color="secondary" aria-label="menu" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </IconButton></InputContainer>
     
         
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
          {
            isMobile ? ( 
           data.map((item) => (
            <Stack
            key={item.id}
            direction={"row"}
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            borderBottom={1}
            py={1}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", columnGap: "23px" }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(45deg, #88069D 0.01%, #D0004B 97.2%)",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              >
                <Avatar
                  sx={{ height: 50, width: 50 }}
                  src="https://openseauserdata.com/files/e488a88498206481dc37e32581204b9b.gif"
                  alt="avatar"
                />
              </Box>
              <Box>
                <TitleInput
                  sx={{
                    fontSize: 16,
                    marginBottom: "7px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    padding: "unset",
                  }}
                >
                  {item.name}
                </TitleInput>
                <Subtitle
                  sx={{
                    margin: "unset",
                    color: "#B6BDCB",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                  //click vào item để xem chi tiết
                  onClick={() => {
                    SeeMore(item.id);
                  }
                  }

                >
                  {
                    seeMore ? '- Lessmore' : '+ More'
                  }
                </Subtitle>
              </Box>
            </Box>
            <Box>
              <Stack direction="column" alignItems='center'>
                <Typography
                  component="p"
                  sx={{ fontWeight: 600, fontSize: 14, lineHeight: '24px',color:'#808089' }}
                >
                  {item.status}
                </Typography>
                <Typography component="p" sx={{
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#E5E9F0'
                }}>
                  {item.price}
                </Typography>
                <Subtitle
                  sx={{
                    margin: "unset",
                    color: "#B6BDCB",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                 {item.timeTransaction}
                </Subtitle>
              </Stack>
            </Box>
          </Stack> 
          ))

            ): (<TableMain headCells={headCells} data={data} />)
          }
         
        </Grid>
      </Grid>
    </>
  );
}

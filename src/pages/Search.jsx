import { Box, Grid, IconButton, Stack,ListItem,Checkbox,ListItemButton,ListItemText } from "@mui/material";
import React,{useState} from "react";
import CardCollection from "../components/Card/CardCollection";
import Input from "../components/Input";
import { ButtonContent, ButtonOutline } from "../styles/component/button";
import { BackGroundOverLayPage, ContainerFull } from "../styles/home";
import MenuIcon from "@mui/icons-material/Menu";
import DropDown from "../components/DropDown/Dropdown";
import { InputContainer } from "../styles/component/input";
import Tags from "../components/Tags";

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
    }
  ]
export default function Search() {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <ContainerFull>
        <BackGroundOverLayPage/>
        <Stack direction={"row"} justifyContent="space-between" marginBottom={2}>
        <InputContainer>
        <IconButton size="large" color="secondary" aria-label="menu" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </IconButton></InputContainer>
        <Stack direction={"row"} spacing={3} alignItems="center">
          <ButtonOutline>
            <ButtonContent sx={{ padding: "5px 20px" }}>
              Make collection offer
            </ButtonContent>
          </ButtonOutline>
          <Box sx={{ width: 256 }}>
            <Input required={false} label="Select blockchain" select={type} />
          </Box>
        </Stack>
      </Stack>
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
            <DropDown type='checkbox' title="Sale type"  >
           {
            type.map((item) => (
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
            ))
           }
            </DropDown>
            <DropDown />
            <DropDown type='checkbox' title="Category" >
           {
            type.map((item) => (
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
            ))
           }
            </DropDown>
          </Stack>
        </Grid>
        <Grid item xs={12} md={isOpen ? 9.5 : 12}>
          <Stack spacing={2} direction="vertical">
           <Tags tags={tags}/>
          </Stack>
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

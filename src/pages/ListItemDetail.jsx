import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Input from "../components/Input";
import { ButtonContent, ButtonOutline } from "../styles/component/button";
import {

  BackGroundOverLayPage,
  Line,
  TitleSection,
  WrapperContainer,
} from "../styles/home";

import { LinkCustom } from "../styles/profile";
import { IOSSwitch, TitleInput } from "../styles/create";
import CardNTFs from "../components/Card/CardNTFs";
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import { TabBig, TabsBig } from "../styles/component/tab";

import ModalMain from "../components/Modal";

import CompleteList from "../components/Modal/CompleteList";
import CardCollection from "../components/Card/CardCollection";
const item = {
  id: 1,
  collectionID: 1898,
  name: "Bored Ape Yatch Club",
  images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",

};
const currency = [
  {
    id: 1,
    name: "USD",
  },
  {
    id: 2,
    name: "ETH",
  },
  {
    id: 3,
    name: "BTC",
  },
];

const ListItemDetail = () => {
  const [value, setValue] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const OpenModal = () => {
    setIsOpen(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <WrapperContainer>
      {isOpen && (
        <ModalMain width="60%" open={isOpen} setOpen={setIsOpen}>
         <CompleteList/>
        </ModalMain>
      )}
      <BackGroundOverLayPage />
      <LinkCustom href="/">Back</LinkCustom>
      <TitleSection>List Item</TitleSection>
      <Grid container spacing={5} flexDirection={{xs:"column-reverse",md:'row'}} justifyContent="space-between">
        <Grid item xs={12} md={7}>
          <TitleInput>Type</TitleInput>
          <TabsBig
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
          >
            <TabBig icon={<AttachMoneySharpIcon />} label="Fixed Price" />
            <TabBig icon={<AccessTimeSharpIcon />} label="Timed Auction" />
          </TabsBig>
          <TitleInput>Price</TitleInput>
          <Stack direction={"row"} spacing={3}>
            <Box width="80%">
              <Input type="text" required={false} placeholder="Amount" />
            </Box>
            <Box width="20%">
              <Input required={false} label="ETC" select={currency} />
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            spacing={3}
            justifyContent="space-between"
            alignItems="center"
          >
            <TitleInput>Duration</TitleInput>
            <IOSSwitch />
          </Stack>
          <Stack direction={"row"} spacing={3}>
            <Box width="50%">
              <Input
                name="Starting Date"
                required={false}
                label="ETC"
                select={currency}
              />
            </Box>
            <Box width="50%">
              <Input
                name="Expiration Date"
                required={false}
                label="ETC"
                select={currency}
              />
            </Box>
          </Stack>
          <Line sx={{ margin: "20px 0" }} />
          <TitleInput>Fees</TitleInput>
          <Stack
            direction={"row"}
            spacing={3}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ color: "#B6BDCB" }}>Service Fee</Typography>

            <Typography sx={{ color: "#B6BDCB" }}>2.5%</Typography>
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "16px",
            }}
          >
            <ButtonOutline>
              <ButtonContent onClick={OpenModal}>
                Complete Listing
              </ButtonContent>
            </ButtonOutline>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <TitleInput>Preview</TitleInput>
         <Box sx={{height:'auto',marginRight:{md:'auto'},marginX:{xs:'auto',md:'unset'},width:{xs:'100%',sm:'55%',md:'70%'}}}>
         <CardCollection item={item} />
         </Box>
        </Grid>
      </Grid>
    </WrapperContainer>
  );
};

export default ListItemDetail;

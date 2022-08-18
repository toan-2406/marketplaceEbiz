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

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { TabBig, TabsBig } from "../styles/component/tab";

import ModalMain from "../components/Modal";

import CompleteList from "../components/Modal/CompleteList";
const item = {
  id: 1,
  name: "NFT 1",
  images: {
    avatar:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    cover:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
  },
  description: "NFT 1",
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
  const [isOpen, setIsOpen] = React.useState(true);
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
      <Grid container spacing={5} justifyContent="space-between">
        <Grid item xs={12} sm={7}>
          <TitleInput>Type</TitleInput>
          <TabsBig
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
          >
            <TabBig icon={<AttachMoneyIcon />} label="Fixed Price" />
            <TabBig icon={<AccessTimeIcon />} label="Timed Auction" />
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
        <Grid item xs={12} sm={4}>
          <TitleInput>Preview</TitleInput>
          <CardNTFs item={item} />
        </Grid>
      </Grid>
    </WrapperContainer>
  );
};

export default ListItemDetail;

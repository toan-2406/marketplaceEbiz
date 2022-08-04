import { Avatar, Box, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Input from "../components/Input";
import { ButtonContent, ButtonOutline } from "../styles/component/button";
import {
  BackGroundOverLayFull,
  BackGroundOverLayPage,
  Line,
  TitleSection,
  WrapperContainer,
} from "../styles/home";

import { LinkCustom } from "../styles/profile";
import { IOSSwitch, Subtitle, TitleInput } from "../styles/create";
import CardNTFs from "../components/Card/CardNTFs";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { TabBig, TabsBig } from "../styles/component/tab";
import {
  InputContainer,
  InputOutline,
  InputSelect,
} from "../styles/component/input";
import ModalMain from "../components/Modal";
import HorizontalLinearStepper from "../components/Stepper";
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
          <TitleInput sx={{ fontSize: 24, textAlign: "center" }}>
            Complete your listing
          </TitleInput>
          <Line />
          <Stack
            direction={"row"}
            spacing={2}
            paddingY={"31px"}
            paddingX={"78px"}
            justifyContent="space-between"
            alignItems="center"
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
                  src={item.images.avatar}
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
                  #1898
                </TitleInput>
                <Subtitle
                  sx={{
                    margin: "unset",
                    color: "#B6BDCB",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Bored Ape Yacht Club
                </Subtitle>
              </Box>
            </Box>
            <Box>
              <Stack direction="column" alignItems='center'>
                <Typography
                  component="p"
                  sx={{ fontWeight: 600, fontSize: 14, lineHeight: '24px',color:'#808089' }}
                >
                  Price
                </Typography>
                <Typography component="p" sx={{
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#E5E9F0'
                }}>
                  0,003 ETH
                </Typography>
                <Subtitle
                  sx={{
                    margin: "unset",
                    color: "#B6BDCB",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  ($9.45)
                </Subtitle>
              </Stack>
            </Box>
          </Stack> 
          <Line />
          <Box sx={{padding:'41px 33px'}}>
            <HorizontalLinearStepper/>
          </Box>
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

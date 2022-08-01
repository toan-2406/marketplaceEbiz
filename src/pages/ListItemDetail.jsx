import { Box, Grid, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import Input from "../components/Input";
import { ButtonContent, ButtonOutline } from "../styles/component/button";
import {
  BackGroundOverLayFull,
  TitleSection,
  WrapperContainer,
} from "../styles/home";

import { LinkCustom } from "../styles/profile";
import { TitleInput } from "../styles/create";
import CardNTFs from "../components/Card/CardNTFs";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { TabBig, TabsBig } from "../styles/component/tab";
import { InputContainer, InputOutline, InputSelect } from "../styles/component/input";
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
const ListItemDetail = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <WrapperContainer>
      <BackGroundOverLayFull />
      <LinkCustom href="/">Back</LinkCustom>
      <TitleSection>List Item</TitleSection>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={8}>
          <TitleInput>
            Type
          </TitleInput>
          <TabsBig
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
          >
            <TabBig icon={<AttachMoneyIcon />} label="Fixed Price" />
            <TabBig icon={<AccessTimeIcon />} label="Timed Auction" />
          </TabsBig>
          <TitleInput>
            Price
          </TitleInput>
          <Stack direction={'row'}>
            <InputContainer>
              <InputOutline placeholder="Amount"/>
            </InputContainer>
            <InputContainer>
             <InputSelect/>
            </InputContainer>
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "16px",
            }}
          >
            <ButtonOutline>
              <ButtonContent>Save</ButtonContent>
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

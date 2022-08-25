import { Avatar, Box, Grid, Stack } from "@mui/material";
import React from "react";
import { InputContainer, InputOutline } from "../../styles/component/input";
import { TitleInput } from "../../styles/create";

import { ColorButton } from "../../styles/component/button";

import {
  Description,
  SubTitleBold,
  TitleBold,
} from "../../styles/component/typography";
import { Line2 } from "../../styles/home";
import { Colors } from "../../styles/theme";
import Input from "../Input";
import DateTimePickerUI from "../Datetimepicker";
const blockchain = [
  {
    id: 1,
    name: "BTC",
  },
  {
    id: 2,
    name: "BNB",
  }
];
const days = [
  {
    id: 1,
    name: "7 days",
  },
  {
    id: 2,
    name: "3 days",
  }
];
export default function MakeOffer() {
  return (
    <Box padding={"12px 28px"}>
      <TitleInput sx={{ fontSize: 24 }} textAlign="center">
        Make an offer
      </TitleInput>
      <Line2 />
      <Grid container spacing={5} mt={1}>
        <Grid item xs={12} md={2}>
          <Box
            sx={{
              height: "115px",
              width: "115px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif"
              alt="avatar"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={10}>
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="space-between"
            rowGap={1}
          >
            <TitleBold variant="h4" component="h4" fontSize="18px !important">
              Otherdeed for Otherside
            </TitleBold>
            <Description>Floor price: 2.86 ETH</Description>
            <Description>Highest offer: 2.82 WETH</Description>
          </Stack>
        </Grid>
      </Grid>

      <TitleInput>Your offer</TitleInput>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Box width='76%' >
        <InputContainer sx={{height:'44px'}}>
          <InputOutline type="number" placeholder="Amount" />
        </InputContainer>
        </Box>
       <Box width='20%'>
       <Input
          required={false}
          label="ETH"
          select={blockchain}
        />
       </Box>
      </Stack>
      <TitleInput>Offer expiration</TitleInput>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Box width='76%' >
        <DateTimePickerUI/>
        </Box>
       <Box width='20%'>
       <Input
          required={false}
          label="3 days"
          select={days}
        />
       </Box>
      </Stack>
      <Box mt={5}>
        <ColorButton sx={{ width: "100%", borderRadius: "10px",backgroundColor: "#2A1125 " }}>
          Make offer
        </ColorButton>
      </Box>
    </Box>
  );
}

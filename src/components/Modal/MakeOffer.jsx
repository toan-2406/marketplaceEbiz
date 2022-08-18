import { Box, Button, Grid, Stack } from "@mui/material";
import React from "react";
import { InputContainer, InputOutline } from "../../styles/component/input";
import { TitleInput } from "../../styles/create";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  ButtonContent,
  ButtonOutline,
  ColorButton,
} from "../../styles/component/button";
import { Colors } from "../../styles/theme";
import { TitleBold } from "../../styles/component/typography";
import { Line2 } from "../../styles/home";

export default function MakeOffer() {
  return (
    <Box padding={"12px 28px"}>
      <TitleInput sx={{ fontSize: 24 }} textAlign="center">
        Make an offer
      </TitleInput>
      <Line2 />
      <TitleInput>Your offer</TitleInput>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <InputContainer>
          <InputOutline type="number" placeholder="0" />
        </InputContainer>
        <TitleBold>Of</TitleBold>
        <InputContainer>
          <InputOutline type="number" placeholder="0" />
        </InputContainer>
      </Stack>
      <Box mt={5}>
        <ColorButton sx={{ width: "100%", borderRadius: "10px" }}>
          Make offer
        </ColorButton>
      </Box>
    </Box>
  );
}

import { Avatar, Box, Button, Grid, Stack } from "@mui/material";
import React from "react";
import { ButtonContent, ButtonOutline } from "../../styles/component/button";
import { InputContainer, InputOutline } from "../../styles/component/input";
import { SubTitleBold } from "../../styles/component/typography";
import { TitleInput } from "../../styles/create";
import { Colors } from "../../styles/theme";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
export default function AddProperties() {
  return (
    <Box padding={"12px 28px"}>
      <TitleInput sx={{ fontSize: 24 }} textAlign="center">
        Add Properties
      </TitleInput>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5.5}>
          <TitleInput>Type</TitleInput>
        </Grid>
        <Grid item xs={12} md={5.5}>
          <TitleInput>Name</TitleInput>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={12} md={5.5}>
          <InputContainer>
            <InputOutline placeholder="Enter type (e.g.Size)" />
          </InputContainer>
        </Grid>
        <Grid item xs={12} md={5.5}>
          <InputContainer>
            <InputOutline placeholder="Enter item name" />
          </InputContainer>
        </Grid>
        <Grid item xs={12} md={1}>
          <Button
            sx={{
              background: Colors.gradientColor,
              height: "30px",
              maxWidth: "30px",
              borderRadius: "50%",
            }}
          >
            <CloseRoundedIcon
              sx={{ color: "#fff", fontSize: 20, fontWeight: 700 }}
            />
          </Button>
        </Grid>
      </Grid>
      <ButtonOutline
        sx={{ borderRadius: "10px !important", marginTop: "10px" }}
      >
        <ButtonContent sx={{ borderRadius: "10px !important" }}>
          Add more
        </ButtonContent>
      </ButtonOutline>
    </Box>
  );
}

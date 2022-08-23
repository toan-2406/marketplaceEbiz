import {  Box, Button, Grid } from "@mui/material";
import React from "react";
import { ButtonContent, ButtonOutline, ColorButton } from "../../styles/component/button";
import { InputContainer, InputOutline } from "../../styles/component/input";

import { TitleInput } from "../../styles/create";
import { Colors } from "../../styles/theme";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
export default function AddProperties() {
  return (
    <Box sx={{padding:{xs:"10px",md:"12px 28px"}}}>
      <TitleInput sx={{ fontSize: 24 }} textAlign="center">
        Add Properties
      </TitleInput>
      <Grid container spacing={2}>
        <Grid item  xs={5.5}>
          <TitleInput>Type</TitleInput>
        </Grid>
        <Grid item  xs={5.5}>
          <TitleInput>Name</TitleInput>
        </Grid>
        <Grid item  xs={1}></Grid>
      </Grid>
      <Grid container spacing={1} alignItems='center'>
        <Grid item  xs={5} md={5.5}>
          <InputContainer>
            <InputOutline placeholder="Enter type (e.g.Size)" />
          </InputContainer>
        </Grid>
        <Grid item  xs={5.5}>
          <InputContainer>
            <InputOutline placeholder="Enter item name" />
          </InputContainer>
        </Grid>
        <Grid item  xs={1.5} md={1}>
          <Button
            sx={{
              background: Colors.gradientColor,
              minheight: "30px",
              minWidth: "30px",
              borderRadius: "50%",
            }}
          >
            <CloseRoundedIcon
              sx={{ color: "#fff", fontSize: 24, fontWeight: 700 }}
            />
          </Button>
        </Grid>
      </Grid>
      <ButtonOutline
        sx={{ borderRadius: "10px !important", marginTop: "10px" }}
      >
        <ButtonContent sx={{ borderRadius: "10px !important" ,paddingY:"6px"}}>
          Add more
        </ButtonContent>
      </ButtonOutline>
      <Box mt={5}>
      <ColorButton sx={{width: "100%",borderRadius: "10px"}}>Save</ColorButton>
      </Box>
      
    </Box>
  );
}

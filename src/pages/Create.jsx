import { Grid } from "@mui/material";
import React from "react";
import { InputNomal, TitleInput, UploadComponent } from "../styles/create";
import {
  BackGroundOverLayFull,
  TitleSection,
  WrapperContainer,
} from "../styles/home";

const Create = () => {
  return (
    <WrapperContainer>
      <BackGroundOverLayFull />
      <TitleSection>Create New Item</TitleSection>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <UploadComponent component='label'>
            Upload
          <input hidden accept="image/*" multiple type="file" />
          </UploadComponent>
        </Grid>
        <Grid item xs={8}>
          <TitleInput>
            Name
          </TitleInput>
          <InputNomal></InputNomal>
        </Grid>
      </Grid>
    </WrapperContainer>
  );
};

export default Create;

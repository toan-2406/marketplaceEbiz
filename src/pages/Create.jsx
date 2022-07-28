import { Avatar, Grid, Typography,} from "@mui/material";
import React from "react";
import {  Subtitle, TitleInput, UploadComponent } from "../styles/create";
import {
  BackGroundOverLayFull,
  TitleSection,
  WrapperContainer,
} from "../styles/home";
import iconupload from "../assets/images/create/iconupload.png";
import Input from "../components/Input";
function Title (props) {
  const {name, required} = props
  return (
    <TitleInput>
      {name} <Typography component='span' sx={{
        color: 'red',
        fontSize: '20px',
        fontWeight: 'bold',
      }}>{required ? '*' : ''}</Typography>
    </TitleInput>
  )
}

const Create = () => {
  return (
    <WrapperContainer>
      <BackGroundOverLayFull />
      <TitleSection>Create New Item</TitleSection>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Title name="Image, Video, Audio, or 3D Model" required />
          <Subtitle sx={{fontSize: '14px !important'}}>Files types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF.<br/>
Max size: 100 MB</Subtitle>
          <UploadComponent component='label'>
            <Avatar sx={{height:72 ,width:72}} src={iconupload} alt="iconupload" />
          <input hidden accept="image/*" multiple type="file" />
          </UploadComponent>
        </Grid>
        <Grid item xs={8}>
          <Input name='Name' required={true} placeholder='Enter item name' type='text'/>
          <Input name='Name' required={true} placeholder='Enter item name' />
        </Grid>
      </Grid>
    </WrapperContainer>
  );
};

export default Create;

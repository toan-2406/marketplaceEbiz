import {  Box, Grid } from "@mui/material";
import React from "react";
import Input from "../components/Input";
import { ButtonContent, ButtonOutline } from "../styles/component/button";
import {
  BackGroundOverLayPage,
  TitleSection,
  WrapperContainer,
} from "../styles/home";
import iconedit from "../assets/images/profile/edit.png";
import { EditPhotoContainer, EditPhotoWrapper, LinkCustom } from "../styles/profile";
import { TitleInput } from "../styles/create";
function EditPhoto (props){
    return (
       <>
       <TitleInput>
         {props.name}
       </TitleInput>
        <EditPhotoWrapper component="label" sx={{borderRadius:props.bradius,height:164,width:164}}>
            <EditPhotoContainer>
            <img src={props.src} alt='icon' />
            <input hidden accept="image/*" multiple type="file" />
            </EditPhotoContainer>
        </EditPhotoWrapper>
        </>
    )
}
const ProfileDetail = () => {
  return (
    <WrapperContainer>
      <BackGroundOverLayPage />
      <LinkCustom href="/">Back</LinkCustom>
      <TitleSection>Profile Details</TitleSection>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={8}>
          <Input
            name="Username"
            type="text"
            placeholder="Enter your username"
          />
          <Input name="Bio" type="textarea" placeholder="Enter your bio" />
          <Input
            name="Email Address"
            type="text"
            placeholder="Enter your email"
          />
          <Input name="Link" type="text" placeholder="Enter your site" />
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
        
          <EditPhoto name='Profile image' src={iconedit} bradius='50%' />
          <br/>
          <EditPhoto name='Profile banner' src={iconedit} bradius='8px' />
        </Grid>
      </Grid>
    </WrapperContainer>
  );
};

export default ProfileDetail;

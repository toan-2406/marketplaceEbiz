import {  Box, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import Input from "../components/Input";
import { ButtonContent, ButtonOutline } from "../styles/component/button";
import {
  BackGroundOverLayPage,
  TitleSection,
  WrapperContainer,
} from "../styles/home";
import iconedit from "../assets/images/profile/edit.png";
import {  LinkCustom } from "../styles/profile";
import EditPhoto from "../components/EditProfile";
const collection = [
    {
      id: 1,
      name: "Avatar",
    },
    {
      id: 2,
      name: "Cover",
    },
  ];
const CreateCollection = () => {
  const [avatar, setAvatar] = useState('')
  const [banner, setBanner] = useState('')
  return (
    <WrapperContainer>
      <BackGroundOverLayPage />
      <LinkCustom href="/">Back</LinkCustom>
      <TitleSection>Create Collection</TitleSection>
      <Grid container spacing={5} flexDirection={{xs:'column-reverse',md:'row'}}>
        <Grid item xs={12} md={8}>
          <Input
            name="Name"
            required={true}
            type="text"
            placeholder="Enter collection name"
          />
          <Input name="Description" type="textarea" placeholder="Enter description" />
          <Input
            name="Categories"
            required={false}
            label="Select collection"
            select={collection}
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
              <ButtonContent>Create</ButtonContent>
            </ButtonOutline>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
        
          <Stack direction={{xs:'row', md:'column'}} justifyContent={{xs:'space-evenly',md:'flex-start'}}>
          <EditPhoto name='Profile image' src={iconedit} bradius='50%' photo={avatar} setPhoto={setAvatar}/>
          <EditPhoto name='Profile banner' src={iconedit} bradius='8px'  photo={banner} setPhoto={setBanner}/>
          </Stack>
        </Grid>
      </Grid>
    </WrapperContainer>
  );
};

export default CreateCollection;

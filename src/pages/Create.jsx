import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Subtitle,
  TitleInput,
  UploadComponent,
  IOSSwitch,
} from "../styles/create";
import {
  BackGroundOverLayFull,
  TitleSection,
  WrapperContainer,
} from "../styles/home";
import iconupload from "../assets/images/create/iconupload.png";
import Input from "../components/Input";
import { ButtonContent, ButtonOutline,ButtonAdd } from "../styles/component/button";

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
const blockchain = [
  {
    id: 1,
    name: "Ethereum",
  },
  {
    id: 2,
    name: "Bitcoin",
  },
  {
    id: 3,
    name: "Ethereum Classic",
  },
];

function Title(props) {
  const { name, required } = props;
  return (
    <TitleInput>
      {name}{" "}
      <Typography
        component="span"
        sx={{
          color: "red",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {required ? "*" : ""}
      </Typography>
    </TitleInput>
  );
}
function ToggleField(props) {
  const { name, required, subname } = props;
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Box>
        <TitleInput sx={{paddingBottom:'unset'}}>
          {name}{" "}
          <Typography
            component="span"
            sx={{
              color: "red",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {required ? "*" : ""}
          </Typography>
        </TitleInput>
        <Subtitle>{subname}</Subtitle>
      </Box>
      <IOSSwitch />
    </Stack>
  );
}
function AddField (props){
  return (
    <Stack direction={"row"} alignItems="center" justifyContent={"space-between"}>
      <Box>
        <TitleInput>
          {props.name}
        </TitleInput>
      </Box>
      <ButtonAdd>Add</ButtonAdd>
    </Stack>
  )
}

const Create = () => {
  return (
    <WrapperContainer>
      <BackGroundOverLayFull />
      <TitleSection>Create New Item</TitleSection>
      <Grid container spacing={10}>
        <Grid item  md={4} sm={12} >
          <Title name="Image, Video, Audio, or 3D Model" required />
          <Subtitle sx={{ fontSize: "14px !important" }}>
            Files types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF.
            <br />
            Max size: 100 MB
          </Subtitle>
          <UploadComponent component="label">
            <Avatar
              sx={{ height: 72, width: 72 }}
              src={iconupload}
              alt="iconupload"
            />
            <input hidden accept="image/*" multiple type="file" />
          </UploadComponent>
          <AddField name="Properties" />
          <AddField name="Levels" />
          <AddField name="Stats" />
        </Grid>
        <Grid item md={8} sm={12} >
          <Input
            name="Name"
            required={true}
            placeholder="Enter item name"
            type="text"
          />
          <Input
            name="Description"
            required={false}
            type="textarea"
            placeholder="Enter Description"
          />
          <Input
            name="Collection"
            required={false}
            label="Select collection"
            select={collection}
          />
          <ToggleField
            name="Unlockable Content"
            subname="Include unlockable content that can only be revealed by the owner of the item."
          />
          <ToggleField
            name="Explicit & Sensitive Content"
            subname="Set this item as explicit and sensitive content"
          />
          <Input
            name="Supply"
            type="text"
            required={false}
            subname="The number of items that can be minted. No gas cost to you!"
            placeholder="Enter Supply"
          />
          <Input
            name="Blockchain"
            required={false}
            label="Select blockchain"
            select={blockchain}
          />
          <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '16px'}}>
            <ButtonOutline>
              <ButtonContent >Create</ButtonContent>
            </ButtonOutline>
          </Box>
        </Grid>
      </Grid>
    </WrapperContainer>
  );
};

export default Create;

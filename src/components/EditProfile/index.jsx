import { Avatar, Box, CardMedia, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { TitleInput } from "../../styles/create";
import { EditPhotoContainer, EditPhotoWrapper } from "../../styles/profile";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function EditPhoto(props) {
  useEffect(() => {
    return () => {
      props.photo && URL.revokeObjectURL(props.photo.preview);
    };
  }, [props.photo]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);

    props.setPhoto(file);
  };
  const removeAvatar = () => {
    props.setPhoto("");
  };
  return (
    <Box>
      <TitleInput>{props.name}</TitleInput>
      <EditPhotoWrapper
        component="label"
        sx={{ borderRadius: props.bradius, height: 164, width: 164,overflow:'hidden' }}
      >
        <EditPhotoContainer>
          {props.photo ? (
            <>
              <CardMedia
                sx={{ height: "100%", width: "100%",borderRadius: props.bradius }}
                component="img"
                src={props.photo.preview}
                alt="photo"
              />

              {/* <IconButton
                sx={{ position: "absolute", top: 5, right: 10, zIndex: 999 ,border: '1px solid #000'}}
                onClick={removeAvatar}
              >
                <CloseRoundedIcon sx={{color:'#fff'}} />
              </IconButton> */}
            </>
          ) : (
            <CardMedia
              sx={{ height: "56px", width: "100%", objectFit: "contain" }}
              component="img"
              src={props.src}
              alt="icon"
            />
          )}
        </EditPhotoContainer>
        <input
          hidden
          accept="image/*"
          onChange={handlePreviewAvatar}
          type="file"
        />
      </EditPhotoWrapper>
    </Box>
  );
}

import { Box, Button, Grid, Stack } from '@mui/material'
import React from 'react'
import { InputContainer, InputOutline } from '../../styles/component/input'
import { TitleInput } from '../../styles/create'
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ButtonContent, ButtonOutline, ColorButton } from '../../styles/component/button';
import { Colors } from '../../styles/theme';
import { TitleBold } from '../../styles/component/typography';

export default function AddLevels() {
  return (
    <Box padding={"12px 28px"}>
      <TitleInput sx={{ fontSize: 24 }} textAlign="center">
        Add Levels
      </TitleInput>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <TitleInput>Name</TitleInput>
        </Grid>
        <Grid item xs={12} md={4}>
          <TitleInput>Value</TitleInput>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={12} md={7}>
          <InputContainer>
            <InputOutline placeholder="Enter type (e.g.Size)" />
          </InputContainer>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="row" justifyContent="space-between" alignItems='center' spacing={1} >
          <InputContainer>
            <InputOutline type='number' placeholder="0" />
          </InputContainer>
          <TitleBold>Of</TitleBold>
          <InputContainer>
            <InputOutline type='number' placeholder="0" />
          </InputContainer>
          </Stack>
        </Grid>
        <Grid item xs={12} md={1}>
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
  )
}
 
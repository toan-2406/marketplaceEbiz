import { Box, Button, Grid, Stack } from '@mui/material'
import React from 'react'
import { InputContainer, InputOutline } from '../../styles/component/input'
import { TitleInput } from '../../styles/create'
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ButtonContent, ButtonOutline, ColorButton } from '../../styles/component/button';
import { Colors } from '../../styles/theme';
import { SubTitleBold, TitleBold } from '../../styles/component/typography';

export default function CancelListing() {
  return (
    <Box sx={{padding:{xs:"10px",md:"12px 28px"}}}>
      <TitleInput sx={{ fontSize: 24 }} textAlign="center">
      Cancel listing ?
      </TitleInput>
        <SubTitleBold>
        Canceling your listing will unpublish this sale and requires a transaction to make sure it will never be fulfillable
        </SubTitleBold>
      <Stack  mt={5}>
      <ButtonOutline>
              <ButtonContent>Make offer</ButtonContent>
            </ButtonOutline> 
      <ColorButton sx={{width: "100%",borderRadius: "10px"}}>Make offer</ColorButton>
      </Stack>
      
    </Box>
  )
}
 
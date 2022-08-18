import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { TitleInput } from '../../styles/create'

export default function Create() {
  return (
    <>
    <Stack direction={"column"} spacing={2} paddingY={'20px'} justifyContent="center" alignItems='center'>
            <TitleInput sx={{fontSize:24}}>Congratulations!</TitleInput>
            <Box sx={{ width: '214px', height: '214px',borderRadius: '8px', overflow: 'hidden' }}>
              <img style={{ height: '100%', width: '100%',objectFit:'cover'}} src='https://openseauserdata.com/files/e488a88498206481dc37e32581204b9b.gif' alt="iconupload" />
            </Box>
            <Typography color="primary">
              <b>#1988 </b>has been successfully created
            </Typography>
          </Stack>
          </>
  )
}

import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Subtitle, TitleInput } from '../../styles/create'
import { Line } from '../../styles/home'
import HorizontalLinearStepper from '../Stepper'

export default function CompleteList(props) {
  return (
    <Box>
       <TitleInput sx={{ fontSize: 24, textAlign: "center" }}>
            Complete your listing
          </TitleInput>
          <Line />
          <Stack
            direction={"row"}
            spacing={2}
            paddingY={"31px"}
            paddingX={"78px"}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              sx={{ display: "flex", alignItems: "center", columnGap: "23px" }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(45deg, #88069D 0.01%, #D0004B 97.2%)",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              >
                <Avatar
                  sx={{ height: 50, width: 50 }}
                  src="https://openseauserdata.com/files/e488a88498206481dc37e32581204b9b.gif"
                  alt="avatar"
                />
              </Box>
              <Box>
                <TitleInput
                  sx={{
                    fontSize: 16,
                    marginBottom: "7px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    padding: "unset",
                  }}
                >
                  #1898
                </TitleInput>
                <Subtitle
                  sx={{
                    margin: "unset",
                    color: "#B6BDCB",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Bored Ape Yacht Club
                </Subtitle>
              </Box>
            </Box>
            <Box>
              <Stack direction="column" alignItems='center'>
                <Typography
                  component="p"
                  sx={{ fontWeight: 600, fontSize: 14, lineHeight: '24px',color:'#808089' }}
                >
                  Price
                </Typography>
                <Typography component="p" sx={{
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#E5E9F0'
                }}>
                  0,003 ETH
                </Typography>
                <Subtitle
                  sx={{
                    margin: "unset",
                    color: "#B6BDCB",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  ($9.45)
                </Subtitle>
              </Stack>
            </Box>
          </Stack> 
          <Line />
          <Box sx={{padding:'41px 33px'}}>
            <HorizontalLinearStepper/>
          </Box>
    </Box>
  )
}

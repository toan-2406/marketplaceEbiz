import { Avatar, Box, CardMedia, Grid, Stack } from '@mui/material'
import React from 'react'
import { ProcesingCircle } from '../../styles/component/progress'
import { Description, SubTitleBold, TitleBold } from '../../styles/component/typography'
import { Colors } from '../../styles/theme'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

export const PurchaseSuccess = () => {
  return (
    <Box sx={{
      padding: "20px 43px"
    }}>
      <TitleBold
        variant="h3"
        component="h3"
        textAlign="center"
        fontSize="24px !important"
      >
        Processing
      </TitleBold>
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              height: "219px",
              width: "219px",
              borderRadius: "10px",
              overflow: "hidden",
              marginX:'auto'
            }}
          >
            <CardMedia component={'img'} style={{ height: "100%", width: "100%" }}
              src="https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif"
              alt="avatar"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Stack  direction="column" alignItems={{xs:'center',md:'flex-start'}} justifyContent='space-between' rowGap={1}>
            <TitleBold
              variant="h4"
              component="h4"
              fontSize="18px !important"
            >
              #1989
            </TitleBold>
            <Description>Bored Ape Yacht Club</Description>
            <TitleBold
            
              component="p"
              fontSize="18px !important"
              fontWeight="400 !important"
            >
              Transaction Hash:{" "}
              <SubTitleBold
                sx={{ color: Colors.textBlue }}
                component="span"
                fontSize="18px !important"
              >
                0x123456789
              </SubTitleBold>
            </TitleBold>
            <Box sx={{width:'auto', marginX: "auto",marginTop:'10px'}}>
              <Avatar sx={{background: Colors.gradientColor,height:"58px",width:"58px",marginX:"auto"}}>
                <DoneRoundedIcon sx={{color:'#fff',fontSize:40,fontWeight:700}}/>
              </Avatar>
              <SubTitleBold
              mt={1}
                component="p"
                fontSize="18px !important"
              >
                Complete
              </SubTitleBold>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
export default function PuchaseItem(props) {
  const {progress} = props
  return (
    <Stack
    direction="column"
    alignItems="center"
    justifyContent="center"
    paddingY={3}
    paddingX={5}
    rowGap="24px"
  >
    <TitleBold variant="h3" component="h3" fontSize="24px !important">
      Processing
    </TitleBold>
    <ProcesingCircle
      width="175px"
      height="175px"
      variant="determinate"
      value={progress}
    />
    <TitleBold
      variant="h6"
      component="p"
      fontSize="18px !important"
      fontWeight="400 !important"
    >
      Transaction Hash:{" "}
      <SubTitleBold
        sx={{ color: Colors.textBlue }}
        component="span"
        fontSize="18px !important"
      >
        0x123456789
      </SubTitleBold>
    </TitleBold>
  </Stack>
  )
}

import { BoxContainer,BoxContent } from '../../../../styles/home/banner'
import React from 'react'
import bannerImg from '../../../../assets/images/home/nft_sell.png'
import { Container, Typography } from '@mui/material'

export default function Banner() {
  return (
    <Container maxWidth='lg'>
      <BoxContainer>

          <img src={bannerImg} alt="banner"/>
     
      <BoxContent>
      <Typography variant='h3' color='white'  >
        Discover, create, and sell unique <b>NFTs</b>
        </Typography>
      </BoxContent>
      </BoxContainer>
    </Container>
  )
}

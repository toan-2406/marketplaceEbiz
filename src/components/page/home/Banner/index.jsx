import { BoxContainer,BoxContent } from '../../../../styles/home/banner'
import React from 'react'
import bannerImg from '../../../../assets/images/home/nft_sell.png'
import { Container, Typography } from '@mui/material'
import { WrapperContainer } from '../../../../styles/home';
const Spolight = React.lazy(() =>
  import("../Spolight")
);

export default function Banner() {
  return (
   <WrapperContainer>
<BoxContainer>

<img src={bannerImg} alt="banner" style={{width:'100%'}}/>

<BoxContent>
<Typography variant='h3' color='white'  >
Discover, create, and sell unique <b>NFTs</b>
</Typography>
</BoxContent>
</BoxContainer>
<Spolight/>
   </WrapperContainer>
      
  )
}

import { Avatar,ListItem, ListItemAvatar } from '@mui/material'
import React from 'react'
import { Description, TitleBold } from '../styles/component/typography'
import { BackGroundOverLayPage, Line2, WrapperContainer } from '../styles/home'
import { BorderBox } from '../styles/itemdetail'
import metamaskicon from '../assets/images/icon/metamask-icon.svg'
import coinbaseicon from '../assets/images/icon/coinbase-icon.svg'
import wavewalleticon from '../assets/images/icon/wavewallet-icon.svg'
import phantomicon from '../assets/images/icon/phantom-icon.svg'
import { ListItemItems } from '../styles/component/list'

export default function ConnectWallet() {
  return (
    <WrapperContainer>
        <BackGroundOverLayPage/>
        <TitleBold fontSize="40px !important" fontWeight={600} textAlign="center" mb={3}>Connect wallet</TitleBold>
        <Description fontSize="18px !important" fontWeight={400} textAlign="center" mb={5}>Choose how you want to connect. There are several wallet provider. </Description>
        <BorderBox width="60% !important" marginX="auto">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={metamaskicon} alt="wallet"/>
                  </ListItemAvatar>
                  <ListItemItems
                    secondary="MetaMask"
                  />
                </ListItem>
                <Line2 />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={coinbaseicon} alt="wallet"/>
                  </ListItemAvatar>
                  <ListItemItems
                    secondary="Coinbase Wallet"
                  />
                </ListItem>
                <Line2 />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={wavewalleticon} alt="wallet"/>
                  </ListItemAvatar>
                  <ListItemItems
                    secondary="Wallet Connect"
                  />
                </ListItem>
                <Line2 />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={phantomicon} alt="wallet"/>
                  </ListItemAvatar>
                  <ListItemItems 
                    secondary="Phantom"
                  />
                </ListItem>
                <Line2 />
                <Description textAlign="center" paddingY="12px">Show more option</Description>  
        </BorderBox>
    </WrapperContainer>
  )
}

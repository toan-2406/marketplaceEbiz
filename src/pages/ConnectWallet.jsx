import { Avatar, Box, ListItem, ListItemAvatar } from "@mui/material";
import React, { useState } from "react";
import { Description, TitleBold } from "../styles/component/typography";
import { BackGroundOverLayPage, Line2, WrapperContainer } from "../styles/home";
import { BorderBox } from "../styles/itemdetail";
import metamaskicon from "../assets/images/icon/metamask-icon.svg";
import coinbaseicon from "../assets/images/icon/coinbase-icon.svg";
import wavewalleticon from "../assets/images/icon/wavewallet-icon.svg";
import phantomicon from "../assets/images/icon/phantom-icon.svg";
import { ListItemItems } from "../styles/component/list";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";

const wallets = [
  {
    id: 1,
    name: "Metamask",
    icon: metamaskicon,
  },
  {
    id: 2,
    name: "Coinbase",
    icon: coinbaseicon,
  },
  {
    id: 3,
    name: "WaveWallet",
    icon: wavewalleticon,
  },
  {
    id: 4,
    name: "Phantom",
    icon: phantomicon,
  },
  {
    id: 5,
    name: "Metamask",
    icon: metamaskicon,
  },
  {
    id: 6,
    name: "Coinbase",
    icon: coinbaseicon,
  },
  {
    id: 7,
    name: "WaveWallet",
    icon: wavewalleticon,
  },
  {
    id: 8,
    name: "Phantom",
    icon: phantomicon,
  },
];

export default function ConnectWallet() {
  const [expand, setExpand] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (name) => {
    dispatch(
      setUser({
        name: "John Doe",
        isLogin: true,
        wallet: name,
      })
    );
    console.log(name);
    navigate("/profile");
  };
  return (
    <Box sx={{minHeight:'70vh'}}>
      <WrapperContainer >
      <BackGroundOverLayPage />
      <TitleBold
        fontSize="40px !important"
        fontWeight={600}
        textAlign="center"
        mb={3}
      >
        Connect wallet
      </TitleBold>
      <Description
        fontSize="18px !important"
        fontWeight={400}
        textAlign="center"
        mb={5}
      >
        Choose how you want to connect. There are several wallet provider.{" "}
      </Description>
      <BorderBox
        sx={{
          width: "60% !important",
          marginX: "auto",
        }}
      >
        <Box
          sx={{
            maxHeight: expand ? "100%" : "234px",
            overflowY: "hidden",
            cursor: "pointer",
          }}
        >
          {wallets.map((wallet) => (
            <Box key={wallet.id}>
              <ListItem onClick={() => handleLogin(wallet.name)}>
                <ListItemAvatar>
                  <Avatar src={wallet.icon} alt="wallet" />
                </ListItemAvatar>
                <ListItemItems secondary={wallet.name} />
              </ListItem>
              <Line2 />
            </Box>
          ))}
        </Box>
        <Description
          textAlign="center"
          paddingY="12px"
          onClick={() => setExpand(!expand)}
         sx={{cursor: "pointer"}}
        >
        {expand ? 'Show less options' : 'Show more options'}
        </Description>
      </BorderBox>
    </WrapperContainer>
    </Box>
  );
}

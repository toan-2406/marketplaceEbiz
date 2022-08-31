import { Box } from "@mui/material";
import React from "react";
import { TitleSection, WrapperContainer } from "../../../../styles/home";
import SliderNFT from "../../../Slider/SliderNFTs";

import "./style.css";

const data = [
  {
    id: 1,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit",
  },
  {
    id: 2,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit",
  },
  {
    id: 3,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit",
  },
  {
    id: 4,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit",
  },
  {
    id: 5,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit",
  },
  {
    id: 6,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit",
  },
  {
    id: 7,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit",
  },
];

export default function NFTs() {
  return (
    <WrapperContainer sx={{ position: "relative",paddingBottom:'84px !important' }}>
      <TitleSection>Trending in all NFTs</TitleSection>
    <Box  sx={{ position: "relative"}}>
    <SliderNFT data={data} />
    </Box>
    </WrapperContainer>
  );
}

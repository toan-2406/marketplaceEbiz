import React from "react";
import { TitleSection, WrapperContainer } from "../../../../styles/home";
import SliderNFT from "../../../Slider/SliderNFTs";

import "./style.css";

const data = [
  {
    id: 1,
    images: {
      avatar:
        "https://openseauserdata.com/files/6eb79c8b88dceea15c98300e4175fdb1.jpg",
      cover:
        "https://openseauserdata.com/files/e488a88498206481dc37e32581204b9b.gif",
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
        "https://lh3.googleusercontent.com/_MVhJrWm9083NzoHa6QvCbUw-Pbyg3REyYZbhty8s9DwRi8UvnoOiY_j-5NhBJwxVMnRqfqy3v91NwYuw2X_SB-vjJg5lOrxX3Xh5Ec=h128-w128",
      cover:
        "https://lh3.googleusercontent.com/P1WOzkGqp_mU_1jvpFhQnevYKryg0BZbzmuiawx-Xm-5NtuvhWXXPQu5P0llghCzAinhL6iOS8M0wmBLS_naA4d1jsyBTYyXP47br6U=h400",
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
    <WrapperContainer sx={{ position: "relative",paddingBottom:'84px' }}>
      <TitleSection>Trending in all NFTs</TitleSection>
      <SliderNFT data={data} />
    </WrapperContainer>
  );
}

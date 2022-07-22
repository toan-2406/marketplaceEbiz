import React from "react";
import { TitleSection, WrapperContainer } from "../../styles/home";
import Slider from "../Slider/SliderNFTs";
import { SwiperSlide } from "swiper/react";
import CardNTFs from "../Card/CardNTFs";

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
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
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
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
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
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
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
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
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
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
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
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
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
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
  },
];

export default function NFTs() {
  return (
    <WrapperContainer>
      <TitleSection>Trending in all NFTs</TitleSection>
      <Slider>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <CardNTFs item={item} />
          </SwiperSlide>
        ))}
      </Slider>
    </WrapperContainer>
  );
}

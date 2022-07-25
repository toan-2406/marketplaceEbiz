import React from "react";
import { TitleSection, WrapperContainer } from "../../../../styles/home";
import SliderCategory from "../../../Slider/SliderCategory";
import "./style.css";
import Art from "../../../../assets/images/home/category/art.png";
import Music from "../../../../assets/images/home/category/music.png";
import Photo from "../../../../assets/images/home/category/photo.png";
import Domain from "../../../../assets/images/home/category/domain.png";

const data = [
  {
    id: 1,
    images: Art,
    category: "Art",
  },
  {
    id: 2,
    images: Music,
    category: "Music",
  },
  {
    id: 3,
    images: Photo,
    category: "Photo",
  },
  {
    id: 4,
    images: Domain,
    category: "Domain",
  },
  {
    id: 5,
    images: Domain,
    category: "Domain",
  },
  {
    id: 6,
    images: Domain,
    category: "Domain",
  },
  {
    id: 7,
    images: Domain,
    category: "Domain",
  },
  {
    id: 8,
    images: Domain,
    category: "Domain",
  },
  {
    id: 9,
    images: Domain,
    category: "Domain",
  },
];
export default function PopularCategories() {
  return (
    <WrapperContainer sx={{ position: "relative",marginBottom:'40px'  }}>
      <TitleSection>Popular categories</TitleSection>
      <SliderCategory data={data} />
    </WrapperContainer>
  );
}

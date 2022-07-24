import React from "react";
import { TitleSection, WrapperContainer } from "../../../../styles/home";
import Slider from "../../../Slider/SliderCategory";
import { SwiperSlide } from "swiper/react";
import "./style.css";
import CardCategories from "../../../Card/CardCategories";
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
  }
];
export default function PopularCategories() {
  return (
    <WrapperContainer sx={{ position: "relative" }}>
      <TitleSection>Popular categories</TitleSection>
      <Slider>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
           <CardCategories item={item}/>
          </SwiperSlide>
        ))}
      </Slider>
    </WrapperContainer>
  );
}

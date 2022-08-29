import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import "../page/home/NFTs/style.css";

// import required modules
import { Navigation } from "swiper";

import { useMediaQuery } from "@mui/material";
import CardNTFs from "../Card/CardNTFs";

const SliderCollection = (props) => {
  const isTable = useMediaQuery("(max-width:1024px)");
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Swiper
      slidesPerView={isMobile ? 1 : isTable ? 2 : 4}
      spaceBetween={2}
      slidesPerGroup={1}
      loop={true}
      navigation={{ enabled: true }}
      modules={Navigation}
      className="mySwiper"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
      props.data.map((item) => (
        <SwiperSlide key={item.id}>
          <CardNTFs  item={item} />
        </SwiperSlide>
      ))
      }
    </Swiper>
  );
};

export default SliderCollection;

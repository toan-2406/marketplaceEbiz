import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import "../page/home/NFTs/style.css";

// import required modules
import { Navigation } from "swiper";

import CardCollection from "../Card/CardCollection";

const SliderNoneProgessBar = (props) => {
  return (
    <Swiper
      slidesPerView={1}
    spaceBetween={5}
    breakpoints={{
      640: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4.5
      },
    }}
      slidesPerGroup={1}
      loop={true}
      navigation={{ enabled: true, clickable: true }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {props.data.map((item) => (
        <SwiperSlide key={item.id}>
          <CardCollection item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderNoneProgessBar;

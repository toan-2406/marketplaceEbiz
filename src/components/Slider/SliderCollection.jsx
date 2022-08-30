import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "./style.css";
import "../page/home/NFTs/style.css";

// import required modules
import { Navigation } from "swiper";

import CardNTFs from "../Card/CardNTFs";

const SliderCollection = (props) => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
    // breakpoints={{
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   1024: {
    //     slidesPerView: 3,
    //     spaceBetween: 20,
    //   },
    // }}
      slidesPerGroup={1}
      loop={true}
      navigation={{ enabled: true }}
      modules={Navigation}
      className="mySwiper"
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

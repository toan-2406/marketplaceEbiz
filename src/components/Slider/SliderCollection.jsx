import React,{useEffect, useState }  from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../page/home/NFTs/style.css';

// import required modules
import { Navigation } from "swiper";
import CardNTFs from "../Card/CardNTFs";

const SliderCollection = (props) => {

  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={20}
    breakpoints={{
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: props.col,
      },
    }}
      slidesPerGroup={1}
      loop={true}
      
     
      navigation={{ enabled: true , clickable: true}}
      modules={[ Navigation]}
      className="mySwiper"
    >
      
       {props.data.map((item) => (
          <SwiperSlide key={item.id} >
          <CardNTFs item={item} />
        </SwiperSlide>
        ))} 
    </Swiper>
  );
};

export default SliderCollection;

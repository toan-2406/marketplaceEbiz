import React,{useEffect, useState }  from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css';

// import required modules
import { Navigation } from "swiper";

import { useMediaQuery } from "@mui/material";
import CardCollection from "../Card/CardCollection";

const SliderNoneProgessBar = (props) => {
  const [realIndex, setRealIndex] = useState(0)
  const length = props.data.length;
  const isTable = useMediaQuery("(max-width:1112px)");
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Swiper
      slidesPerView={isMobile ? 1 : isTable ? 3 : 4.5}
      spaceBetween={16}
      slidesPerGroup={1}
      loop={true}
      navigation={{ enabled: true}}
      modules={ Navigation}
      className="mySwiper"
      
    >
      
       {props.data.map((item) => (
          <SwiperSlide key={item.id} >
          <CardCollection item={item}/>
        </SwiperSlide>
        ))} 
    </Swiper>
  );
};

export default SliderNoneProgessBar;

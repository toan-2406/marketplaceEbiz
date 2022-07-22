import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css'

// import required modules
import { Pagination, Navigation } from "swiper";


const SliderNFTs = (props) => {

  return (
    <Swiper
      slidesPerView={ 3}
      spaceBetween={ 16}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        type: "progressbar",
      }}
      navigation={ false}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {props.children}
    </Swiper>
  );
};

export default SliderNFTs;

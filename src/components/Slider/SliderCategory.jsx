import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const SliderCategory = (props) => {
  return (
    <Swiper
      slidesPerView={3.5}
      spaceBetween={40}
      slidesPerGroup={1}
      loop={true}
      style={{ width: "100%" }} 
      loopFillGroupWithBlank={true}
      pagination={{
        type: "progressbar",
      }}
      navigation={{ enabled: true }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {props.children}
    </Swiper>
  );
};

export default SliderCategory;

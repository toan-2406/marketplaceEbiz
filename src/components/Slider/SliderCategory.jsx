import React,{useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css';


// import required modules
import { Pagination, Navigation } from "swiper";
import CardCategories from "../Card/CardCategories";
import { useMediaQuery } from "@mui/material";

const SliderCategory = (props) => {
  const [realIndex, setRealIndex] = useState(0)
  const length = props.data.length;
  const isTable = useMediaQuery("(max-width:1112px)");
  const isMobile = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    console.log(realIndex)
    document.querySelector('.swiper-progressbar-fill').style.width = `${100 / length}%`
    document.querySelector('.swiper-progressbar-fill').style.left= `${100 / length * realIndex}%`
  }, [realIndex,length])

  return (
    <Swiper
    
      slidesPerView={isMobile ? 1 : isTable ? 2.5 : 3.5}
      spaceBetween={40}
      slidesPerGroup={1}
      loop={true}
      style={{ width: "100%" }} 
      onActiveIndexChange={(realIndex) => {
        setRealIndex(realIndex.realIndex)
      }}

      pagination={{
        type: "progressbar",
        progressbarFillClass: "swiper-progressbar-fill",
        renderProgressbar: (progressbarEl) => {
          return '<span class="' + progressbarEl + '">' + + "</span>";
        }
      }} 
      navigation={{ enabled: true }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
       {props.data.map((item) => (
          <SwiperSlide key={item.id}>
           <CardCategories item={item}/>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SliderCategory;

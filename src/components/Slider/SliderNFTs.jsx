import React,{useEffect, useState }  from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css';

// import required modules
import { Pagination, Navigation } from "swiper";
import CardNTFs from "../Card/CardNTFs";

const SliderNFTs = (props) => {
  const [realIndex, setRealIndex] = useState(0)
  const length = props.data.length;
  useEffect(() => {
    document.querySelector('.swiper-progressbar-fill1').style.width = `${100 / length}%`
    document.querySelector('.swiper-progressbar-fill1').style.left= `${100 / length * realIndex}%`
  }, [realIndex,length])
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={20}
    breakpoints={{
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
      slidesPerGroup={1}
      loop={true}
      onActiveIndexChange={(realIndex) => {
        setRealIndex(realIndex.realIndex)
      }}
      pagination={{
        type: "progressbar",

        progressbarFillClass: "swiper-progressbar-fill1",
        renderProgressbar: (progressbarEl) => {
          return '<span class="' + progressbarEl + '"> </span>';
        }
      }}
      navigation={{ enabled: true , clickable: true}}
      modules={[Pagination, Navigation]}
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

export default SliderNFTs;

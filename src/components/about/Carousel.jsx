import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";






// import required modules
import { Pagination,  Autoplay } from "swiper";

export default function Carousel({img1,img2,img3}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        modules={[Pagination, Autoplay]}
        className="w-full h-[40vh] md:h-full  rounded-lg "
      >
        <SwiperSlide><img className="w-full h-full object-cover" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover" src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover" src={img3} alt="" /></SwiperSlide>

  
        
      </Swiper>
    </>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";
import "./Carousel.scss"; // core Swiper
import "swiper/css/autoplay";
// Import Swiper styles
import { Autoplay } from "swiper";
import { EffectCards } from 'swiper';

const Carousel = () => {
  
  return (
    <div className=" relative flex w-full">
       <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper "
      >
        <div className='text-black' >
        <SwiperSlide className='text-black'  >Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </div>
        
      </Swiper>
    </div>
  );
}

export default Carousel;




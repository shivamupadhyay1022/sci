import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";
import "./Carousel.scss"; // core Swiper
import "swiper/css/autoplay";
// Import Swiper styles
import { Autoplay } from "swiper";
import { EffectCards } from 'swiper';
import Futurecard from './Futurecard';

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
        <SwiperSlide>
          <Futurecard img="https://solaristech.in/images/shivam.jpg" name="Shivam" pos="Full Stack Developer" className='bg-white' />
        </SwiperSlide>
        <SwiperSlide>
          <Futurecard img="https://solaristech.in/images/ritik_image.jpg" name="Rtik Kumar" pos="Data Scientist" className='bg-white' />
        </SwiperSlide>
        <SwiperSlide>
          <Futurecard img="https://solaristech.in/images/abbhishek.jpg" name="Abhishek Kumar" pos="Full Stack Developer" className='bg-white' />
        </SwiperSlide>
        <SwiperSlide>
          <Futurecard img="https://solaristech.in/images/WhatsAppImage2023-02-01at12.09.04.jpg" name="Harsh Raj" pos="Graphic Designer" className='bg-white' />
        </SwiperSlide>

      </div>
        
      </Swiper>
    </div>
  );
}

export default Carousel;




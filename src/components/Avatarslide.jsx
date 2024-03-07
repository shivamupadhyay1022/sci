import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Avatarslide.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
import Futurecard from './Futurecard';
function Avatarslide() {
    
  return (
    <div className=" relative overflow-x-hidden y-32 flex w-full">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 450,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper swiper2 swiper-slide2"
      >
        <SwiperSlide className='' >
            <Futurecard img="https://solaristech.in/images/shivam.jpg" name="Shivam" pos="Full Stack Developer" className='bg-white' />
        </SwiperSlide>
        <SwiperSlide  >
        <Futurecard img = "https://solaristech.in/images/ritik_image.jpg" name="Ritik Kumar" pos="Data Scientist"/>
        </SwiperSlide>
        <SwiperSlide>
        <Futurecard/>
        </SwiperSlide>
        <SwiperSlide>
        <Futurecard/>
        </SwiperSlide>
        <SwiperSlide>
        <Futurecard/>
        </SwiperSlide>
        
      </Swiper>
 </div>
  )
}

export default Avatarslide
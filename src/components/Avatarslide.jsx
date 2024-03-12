import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {epac, forum, periodic_table, qeds} from '../assets/index'
import SwiperCore,{Autoplay} from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Avatarslide.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
import Futurecard from './Futurecard';
import { joharnite } from '../assets';
function Avatarslide() {
  SwiperCore.use([Autoplay])

    // useEffect = {
    // }
  return (
    <div className=" relative overflow-x-hidden y-32 md:h-[500px] flex w-full  ">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        autoplay= {{
          delay: 3500,
          pauseOnMouseEnter: true
        }}
        speed={200}
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
        <SwiperSlide className='  w-[350px] md:w-[800px] h-full self-center' >
            <img src={joharnite} className=''/>
        </SwiperSlide>
        <SwiperSlide className='w-[350px] md:w-[800px] h-full self-center' >
            <img src={forum} className=''/>
        </SwiperSlide>
        <SwiperSlide className=' w-[300px] md:w-[800px] h-full self-center' >
            <img src={epac} className=''/>
        </SwiperSlide>
        <SwiperSlide className=' w-[350px] md:w-[800px] h-full self-center' >
            <img src={qeds} className=''/>
        </SwiperSlide>
        <SwiperSlide className=' w-[350px] md:w-[800px] h-full self-center' >
            <img src={periodic_table} className=''/>
        </SwiperSlide>
       
      </Swiper>
 </div>
  )
}

export default Avatarslide
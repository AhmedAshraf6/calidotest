'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Slider({ images }) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
        {images.map((img, index) => {
          return (
            <SwiperSlide key={`${index}`}>
              <div className='w-full h-[500px] select-none'>
                <Image
                  src={img}
                  className='w-full h-full object-cover'
                  alt='test'
                  width='500'
                  height='500'
                  loading='lazy'
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

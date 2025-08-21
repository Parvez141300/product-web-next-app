'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Next.js Image
import Image from "next/image";

// banner images
import banner1 from '../../../assets/banner-images/banner1.png';
import banner2 from '../../../assets/banner-images/banner2.png';
import banner3 from '../../../assets/banner-images/banner3.png';

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={banner1} alt="Banner 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="Banner 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} alt="Banner 3" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

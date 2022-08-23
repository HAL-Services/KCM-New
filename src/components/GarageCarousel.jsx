import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/GarageCarousel.css";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";
import ExpertiseImagedata from "../OfflineAPI/ExpertiseImagesData";
export default function GarageCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        spaceBetween={70}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
          },
        }}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        className="mySwiperGarage"
      >
        {ExpertiseImagedata.map((imageData) => {
          return (
            <SwiperSlide key={imageData.id} className="GaragecarouselContainer">
              <img className="GarageImage" src={imageData.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

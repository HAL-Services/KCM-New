import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Carousel.styles.css";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination,Autoplay } from "swiper";

export default function Carousel(props) {
  return (
    <div className="CarouselContainer">
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        spaceBetween={70}
        grabCursor={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
          },
        }}
        scrollbar={true}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        {props.data.map((imageData) => {
          return (
            <SwiperSlide key={imageData.id} className="carouselContainer">
              <LazyLoadImage src={imageData.url} />
              <div className="carouselUnderline">
                {imageData.title}
                <div className="underline"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

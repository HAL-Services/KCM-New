import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Carousel.styles.css";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function Carousel(props) {
  return (
    <>
      <Swiper
        slidesPerView={1}
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
            slidesPerGroup: 3,
          },
        }}
        scrollbar={true}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {props.data.map((imageData) => {
          return (
            <SwiperSlide key={imageData.id} className="carouselContainer">
              <img src={imageData.url} />
              <div className="carouselTextContainer">
                <h5 style={{ height: "100%" }}>{imageData.title}</h5>
                <div className="carouselUnderline"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

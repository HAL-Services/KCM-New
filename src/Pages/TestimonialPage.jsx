import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/Testimonial.styles.css";

// import required modules
import MaleImage from "../Assets/Images/Testimonial.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
export default function Testimonial() {
  return (
    <div className="testimonialContainer" id="testimonial">
      <div className="testimonialHeading">
        <b>Happy</b> Clients
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          700: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="testimonialSwiper"
      >
        <SwiperSlide className="testimonialSlider">
          <div className="clientWrapper">
            <div className="clientContainer">
              <div className="profile">
                <div className="clientImgBox">
                  <img src={MaleImage} />
                </div>
                <h2>Rohit Kumar</h2>
              </div>
              <p>
                <span className="clientLeft">
                  <FaQuoteLeft />
                </span>
                Best service experience in the city. Quick and clean.
                <span className="clientRight">
                  <FaQuoteRight />
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonialSlider">
          <div className="clientWrapper">
            <div className="clientContainer">
              <div className="profile">
                <div className="clientImgBox">
                  <img src={MaleImage} />
                </div>
                <h2>Raman U</h2>
              </div>
              <p>
                <span className="clientLeft">
                  <FaQuoteLeft />
                </span>
                Good place to visit for luxury car repairs. Very reasonably
                priced
                <span className="clientRight">
                  <FaQuoteRight />
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonialSlider">
          <div className="clientWrapper">
            <div className="clientContainer">
              <div className="profile">
                <div className="clientImgBox">
                  <img src={MaleImage} />
                </div>
                <h2>Manju M</h2>
              </div>
              <p>
                <span className="clientLeft">
                  <FaQuoteLeft />
                </span>
                Great work with affordable prices. Commitment fulfilled .
                Genuine advice for car repairs
                <span className="clientRight">
                  <FaQuoteRight />
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonialSlider">
          <div className="clientWrapper">
            <div className="clientContainer">
              <div className="profile">
                <div className="clientImgBox">
                  <img src={MaleImage} />
                </div>
                <h2>Mayur P</h2>
              </div>
              <p>
                <span className="clientLeft">
                  <FaQuoteLeft />
                </span>
                Good shop and great people
                <span className="clientRight">
                  <FaQuoteRight />
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

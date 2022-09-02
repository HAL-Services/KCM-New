import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/Testimonial.styles.css";

import TestimonialData from "../OfflineAPI/TestimonialData.js";
// import required modules
import speakGif from "../Assets/Images/speakGif.gif";

import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Testimonial() {
  return (
    <div className="testimonialContainer" id="testimonial">
      <div className="testimonialHeading">
        <span style={{ marginRight: "5px" }}>
          <img style={{ height: "80px" }} src={speakGif} />
        </span>
        <b>Happy</b>-Clients
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
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
        {TestimonialData.map((data) => {
          return (
            <SwiperSlide key={data.id} className="testimonialSlider">
              <div className="clientWrapper">
                <div className="clientContainer">
                  <div className="profile">
                    <div className="clientImgBox">
                      <img src={data.image} />
                    </div>
                    <h2>{data.username}</h2>
                  </div>
                  <p>
                    <span className="clientLeft">
                      <FaQuoteLeft />
                    </span>
                    {data.review}
                    <span className="clientRight">
                      <FaQuoteRight />
                    </span>
                  </p>
                </div>
                <div
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  {[...Array(data.stars)].map(() => (
                    <FaStar style={{ color: "gold" }} />
                  ))}
                  {[...Array(5 - data.stars)].map(() => (
                    <FaStar style={{ color: "grey" }} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="writeReview">
        Liked our work. Leave us a feedback.
        <Link className="review-link" to="/write">
          Write Review
        </Link>
      </div>
    </div>
  );
}

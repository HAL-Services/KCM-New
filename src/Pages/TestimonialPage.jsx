import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/Testimonial.styles.css";
// import required modules


import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchTestimonialData } from "../apiCalls";
import HeadingText from "../components/HeadingText";

export default function Testimonial() {
  const [reviewsData, setReviewsdata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTestimonialData();
        setReviewsdata(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="testimonialContainer" id="testimonial">
      <div className="testimonialHeading">
        <HeadingText text1="Happy" text2="Clients" style="light" />
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
        {reviewsData && reviewsData.map((data) => {
          return (
            <SwiperSlide key={data.username} className="testimonialSlider">
              <div className="clientWrapper">
                <div className="clientContainer">
                  <div className="profile">
                    <div className="clientImgBox">
                      <img src={data.image} alt="gif" />
                    </div>
                    <h2>{data.username}</h2>
                  </div>
                  <p>
                    <span className="clientLeft">
                      <FaQuoteLeft />
                    </span>
                    {data.data}
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
                  {[...Array(data.stars)].map((e, index) => (
                    <FaStar
                      style={{ color: "gold", marginRight: "2px" }}
                      key={index}
                    />
                  ))}
                  {[...Array(5 - data.stars)].map((e, index) => (
                    <FaStar
                      style={{ color: "grey", marginRight: "2px" }}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="writeReview">
        Liked our work. Leave us a feedback
        <Link className="review-link" to="/write">
         <button className="button-6">Write Review</button>
        </Link>
      </div>
    </div>
  );
}

import HeadingText from "../components/HeadingText";
import Card from "../components/HowWeWorkCard";

// import styles
import "../styles/Section4.scss";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Section4 = () => {
  useEffect(()=>{
    Aos.init({duration:999})
  },[])
  return (
    <div className="section4_container">
      <div className="section4_main_title">
        <HeadingText text1="Work" text2="Hours" style={"dark"} />
      </div>
      <div className="timings" data-aos="zoom-in-up">
        <div className="section4_timings">
          <Card
            title="Opening Hours"
            body={
              "Mon:	9:30 am – 6:30 pm \n\n Tue:	 9:30 am – 6:30 pm \n\n Wed:	9:30 am – 6:30 pm \n\n Thu: 9:30 am – 6:30 pm \n\n Fri:	9:30 am – 6:30 pm \n\n Sat: 	9:30 am – 6:30 pm \n\n Sun: Closed"
            }
          />
        </div>
      </div>
      <div className="section4_googlemap" >
        <HeadingText text1="Locate" text2="Us" style="light" />
        <a
          href="https://www.google.com/maps/dir//KCM+AUTOMOBILES/@28.4887933,76.9875978,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d183000000021:0x8d473674bdf87c83!2m2!1d77.0576381!2d28.4888112"
          target="_blank"
          rel="noreferrer"
          className="section4_imageContainer"
        >
          <img
            className="googlemap_img"
            src="https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=en-GB&region=IN&markers=color:0xddaa44|28.4887690,77.0571610&zoom=16&client=google-presto&signature=e0_HxoXhhjW5ny4v0dBrz3MvUv4"
            alt="google-img"
            data-aos="zoom-in-up"
          />
        </a>
      </div>
    </div>
  );
};

export default Section4;

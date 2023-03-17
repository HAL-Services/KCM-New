import "../styles/HeadingText.scss";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
export default function HeadingText({ text1, text2, style }) {
  useEffect(()=>{
      Aos.init({duration:500})
  },[])
  return (
    <h2 className={`about_title_${style}`} data-aos="zoom-in-up">
      {text1}
      <h3 className="experience">
        {text2}
        <span>{text2.toUpperCase()}</span>
      </h3>
    </h2>
  );
}

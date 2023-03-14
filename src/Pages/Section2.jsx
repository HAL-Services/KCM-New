import GarageCarousel from "../components/GarageCarousel";
import "../styles/Section2.styles.scss";
import HeadingText from "../components/HeadingText";
export default function Section2() {
  return (
    <div className="section2-container">

     <HeadingText text1="Latest From" text2="Garage" style="dark"/>
      <GarageCarousel />
    </div>
  );
}

import Carousel from "../components/Carousel";
import GarageCarousel from "../components/GarageCarousel";
import ExpertiseImagedata from "../OfflineAPI/ExpertiseImagesData";
import WaveImage from "../Assets/Images/wave.svg";
import "../styles/Section2.styles.css";
export default function Section2() {
  return (
    <div className="Section2PageContainer">
      <section>
        <div className="Section2PageText">Our Expertise</div>
        <Carousel data={ExpertiseImagedata} />
      </section>
      <section className="Section2PageSection">
        <div className="Section2PageText1">Latest From Our Garage</div>
        <GarageCarousel />
      </section>
      <img src={WaveImage} style={{ top: "0px" }}></img>
    </div>
  );
}

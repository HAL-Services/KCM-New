import Carousel from "../components/Carousel";
import GarageCarousel from "../components/GarageCarousel";
import ExpertiseImagedata from "../OfflineAPI/ExpertiseImagesData";
import WaveImage from "../Assets/Images/wave.svg";
import "../styles/HomePage.styles.css";
export default function HomePage() {
  return (
    <div className="HomePageContainer">
      <section>
        <div className="HomePageText">Our Expertise</div>
        <Carousel data={ExpertiseImagedata} />
      </section>
      <section className="HomePageSection">
        <div className="HomePageText1">Latest From Our Garage</div>
        <GarageCarousel />
      </section>
      <img src={WaveImage} style={{ top: "0px" }}></img>
    </div>
  );
}

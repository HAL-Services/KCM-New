import Carousel from "../components/Carousel";
import GarageCarousel from "../components/GarageCarousel";
import ExpertiseImagedata from "../OfflineAPI/ExpertiseImagesData";
import WaveImage from "../Assets/Images/wave.svg";
import "../styles/HomePage.styles.css";
export default function HomePage() {
  return (
    <div className="HomePageContainer">
      <section style={{
        marginTop:"100px"
      }}>
        <div className="HomePageText">Our Expertise</div>
        <Carousel data={ExpertiseImagedata} />
      </section>
      <section
        style={{
          backgroundImage: `url(${WaveImage})`,
        }}
        className="HomePageSection"
      >
        <div className="HomePageText1">Latest From Our Garage</div>
        <GarageCarousel />
      </section>
    </div>
  );
}

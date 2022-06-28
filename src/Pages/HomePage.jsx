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
        <h1 className="HomePageText">Our Expertise</h1>
        <Carousel data={ExpertiseImagedata} />
      </section>
      <section
        style={{
          backgroundImage: `url(${WaveImage})`,
        }}
        className="HomePageSection"
      >
        <h1 className="HomePageText1">Latest From Our Garage</h1>
        <GarageCarousel />
      </section>
    </div>
  );
}

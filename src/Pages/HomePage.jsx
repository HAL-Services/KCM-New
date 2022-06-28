import Carousel from "../components/Carousel";
import GarageCarousel from "../components/GarageCarousel";
import ExpertiseImagedata from "../OfflineAPI/ExpertiseImagesData";

import "../styles/HomePage.styles.css";
export default function HomePage() {
  return (
    <div>
      <section>
        <h1 style={{ padding: "20px" }}>Our Expertise</h1>
        <Carousel data={ExpertiseImagedata} />
      </section>
      <h1 style={{ padding: "20px" }}>Latest From Our Garage</h1>
      <GarageCarousel />
      <section></section>
    </div>
  );
}

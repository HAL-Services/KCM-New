import GarageCarousel from "../components/GarageCarousel";
import WaveImage from "../Assets/Images/wave.svg";
import "../styles/Section2.styles.scss";
export default function Section2() {
  return (
    <div className="section2-container">

      <h2 className="about_title">Latest from
        <h3 className="experience">Garage
          <span>GARAGE</span>
        </h3>
      </h2>
      <GarageCarousel />
    </div>
  );
}

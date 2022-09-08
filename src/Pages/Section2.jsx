import GarageCarousel from "../components/GarageCarousel";
import WaveImage from "../Assets/Images/wave.svg";
import "../styles/Section2.styles.css";
export default function Section2() {
  return (
    <div className="Section2PageContainer">
      <section className="Section2PageSection">
        <div className="Section2PageText1">Latest From Our Garage</div>
        <GarageCarousel />
      </section>
      <img
        className="waveImage"
        src={WaveImage}
        style={{ marginTop: "-0.8rem", zIndex: "-1" }}
        alt="wave"
      ></img>
    </div>
  );
}

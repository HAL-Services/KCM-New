import Marquee from "react-fast-marquee";
import "../styles/Marquee.styles.scss";
import MarqueeData from "../OfflineAPI/MarqueeImageData";
export default function MarqueeElement() {
  return (
    <div className="MarqueeContainer">
      <h2 className="about_title_light" >
        Dealing With All Major
        <h3 className="experience">
          Brands
          <span>Brands</span>
        </h3>
      </h2>
      <Marquee gradient={false} speed={90}>
        {MarqueeData.map((imgData) => (
          <div key={imgData.id} className="MarqueeDiv">
            <img className="MarqueeImage" src={imgData.url} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
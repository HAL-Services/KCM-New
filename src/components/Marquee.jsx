import Marquee from "react-fast-marquee";
import "../styles/Marquee.styles.scss";
import MarqueeData from "../OfflineAPI/MarqueeImagesData";
export default function MarqueeElement() {
  return (
    <div className="MarqueeContainer">
      <Marquee gradient={false} speed={110}>
        {MarqueeData.map((imgData) => (
          <div key={imgData.id} className="MarqueeDiv">
            <img className="MarqueeImage" src={imgData.url} alt="marquee" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

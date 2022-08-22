import Marquee from "react-fast-marquee";
import "../styles/Marquee.styles.scss";
import MarqueeData from "../OfflineAPI/MarqueeImagesData";
export default function MarqueeElement() {
  return (
    <div className="MarqueeContainer" style={{ backgroundColor: "whitesmoke" }}>
      <Marquee gradient={false}>
        {MarqueeData.map((imgData) => (
          <div key={imgData.id} className="MarqueeDiv">
            <img className="MarqueeImage" src={imgData.url} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

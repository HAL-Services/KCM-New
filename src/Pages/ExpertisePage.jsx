import { useState, useEffect } from "react";
import ExpertiseImagedata from "../OfflineAPI/ExpertiseImagesData";
import "../styles/ExpertisePage.styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function ExpertisePage() {
  const [exp, setExp] = useState([]);
  useEffect(() => {
    setExp(ExpertiseImagedata);
  }, []);
  return (
    <div className="expertise-container">
      <div className="expertise-wrapper">
        {exp.map((img) => {
          return (
            <div key={img.id} className="expertise-img-container">
              <h3>{img.title}</h3>
              <LazyLoadImage src={img.url} alt="garage-images" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

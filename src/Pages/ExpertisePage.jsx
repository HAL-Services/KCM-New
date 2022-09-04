import { useState, useEffect } from "react";
import ExpertiseImagedata from "../OfflineAPI/ExpertiseImagesData";
import "../styles/ExpertisePage.styles.scss";
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
              <img src={img.url} alt="garage-images" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

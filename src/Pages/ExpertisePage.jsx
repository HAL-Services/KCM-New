import ExpertiseImagedata from "../OfflineAPI/ExpertiseImagesData";
import "../styles/ExpertisePage.styles.scss";
export default function ExpertisePage() {
  return (
    <div className="expertise-container">
      <div className="expertise-wrapper">
        {ExpertiseImagedata.map((img) => {
          return (
            <div key={img.id} className="expertise-img-container">
              <h2>{img.title}</h2>
              <img src={img.url} alt="garage-images" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

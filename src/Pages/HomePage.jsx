import Carousel from "../components/Carousel";
import ExpertiseImagedata from "../OfflineAPI/ExpertiseImagesData";
export default function HomePage() {
  return (
    <div >
      <h1 style={{ padding: "20px" }}>Our Expertise</h1>
      <Carousel data={ExpertiseImagedata} />
    </div>
  );
}

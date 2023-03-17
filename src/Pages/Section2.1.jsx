
import HeadingText from "../components/HeadingText";
// importing Styles
import "../styles/ServiceSection.scss";

// animation
import Aos from "aos";
import 'aos/dist/aos.css'


import PackageCards from "../components/PackageCards";
const ServiceSection = () => {
  return (
    <div className="service-section">
      <HeadingText text1="Our" text2="Packages" style="light" />
       <PackageCards/>
    </div>
  );
};

export default ServiceSection;


import HeadingText from "../components/HeadingText";
// importing Styles
import "../styles/ServiceSection.scss";

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

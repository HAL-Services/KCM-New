import NavBar from "../components/NavBar";
import LandingPage from "../Pages/LandingPage";
import MarqueeElement from "../components/Marquee";
import Section2 from "../Pages/Section2";
import Section3 from "../Pages/Section3";
import Testimonial from "../Pages/TestimonialPage";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import AboutUs from "./AboutUs";
import Section4 from "./Section4";
import ServiceSection from "./Section2.1";
import ExpertiseSection from "./ExpertiseSection";
export default function FullPage() {
  return (
    <div>
      <NavBar titles={["Services", "About", "Testimonial", "Contact Us"]} />
      <LandingPage />
      <MarqueeElement />
      <ExpertiseSection />
      <Section2 />
      <ServiceSection />
      <Section3 />
      <Testimonial />
      <AboutUs />
      <Section4 />
      <ContactUs />
      <Footer />
    </div>
  );
}

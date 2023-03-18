import NavBar from "../components/NavBar";
import "../styles/FullPage.styles.scss";
import LandingPage from "../Pages/LandingPage";
import ExpertiseSection from "./ExpertiseSection";
import Section3 from '../Pages/Section3'
import Section2 from '../Pages/Section2'
import AboutUs from '../Pages/AboutUs'
import Testimonial from "../Pages/TestimonialPage";
import Section4 from '../Pages/Section4'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import ServiceSection from '../Pages/Section2.1'
import MarqueeElement from "../components/Marquee";
export default function FullPage() {

  return (
    <div className="parent">
      <NavBar titles={["Services", "About", "Testimonial", "Contact Us"]} />
      <LandingPage />
      <MarqueeElement />
      <ExpertiseSection />
      <ServiceSection />
      <Section3 />
      <Section2 />
      <AboutUs />
      <Testimonial />
      <Section4 />
      <ContactUs />
      <Footer />

    </div>
  );
}

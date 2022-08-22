import NavBar from "../components/NavBar";
import LandingPage from "../Pages/LandingPage";
import MarqueeElement from "../components/Marquee";
import Section2 from "../Pages/Section2";
import Section3 from "../Pages/Section3";
import Testimonial from "../Pages/TestimonialPage";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import AboutUs from "./AboutUs";
export default function FullPage() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <MarqueeElement />
      <Section2 />
      <Section3 />
      <Testimonial />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

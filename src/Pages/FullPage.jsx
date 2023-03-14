import { lazy } from "react";
import NavBar from "../components/NavBar";


import Testimonial from "../Pages/TestimonialPage";





import "../styles/FullPage.styles.scss";
import LandingPage from "../Pages/LandingPage";
import { Suspense } from "react";
import Loader from "../components/common/Loader";



const ExpertiseSection = lazy(() => import("./ExpertiseSection"))

const ServiceSection = lazy(() => import('./Section2.1'))
const Section3 = lazy(() => import("../Pages/Section3"))
const Section2 = lazy(() => import("../Pages/Section2"))
const Section4 = lazy(() => import("./Section4"))
const AboutUs = lazy(() => import("./AboutUs"))
const Footer = lazy(() => import("../components/Footer"))
const ContactUs = lazy(() => import("../components/ContactUs"))




export default function FullPage() {

  return (
    <div className="parent">
      <NavBar titles={["Services", "About", "Testimonial", "Contact Us"]} />
      <LandingPage />
      <Suspense fallback={<Loader />}>
        <ExpertiseSection />
        <ServiceSection />
        <Section3 />
        <Section2 />
        <AboutUs />
        <Testimonial />
        <Section4 />
        <ContactUs />
        <Footer />
      </Suspense>
    </div>
  );
}

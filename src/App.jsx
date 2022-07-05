import "./styles/App.scss";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import MarqueeElement from "./components/Marquee";
import GarageCarousel from "./components/GarageCarousel";
import LandingPage from "./Pages/LandingPage";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <MarqueeElement />
      <HomePage />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

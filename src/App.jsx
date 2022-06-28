import "./styles/App.scss";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import MarqueeElement from "./components/Marquee";
import GarageCarousel from "./components/GarageCarousel";
import LandingPage from "./Pages/LandingPage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <MarqueeElement/>
      <HomePage/>
    </div>
  );
}

export default App;

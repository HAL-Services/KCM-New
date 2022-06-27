import "./styles/App.scss";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import MarqueeElement from "./components/Marquee";
import GarageCarousel from "./components/GarageCarousel";
function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

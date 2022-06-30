import "./styles/App.scss";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import MarqueeElement from "./components/Marquee";
import GarageCarousel from "./components/GarageCarousel";
import Card from "./components/Card";
import CardData from "./OfflineAPI/CardRealatedData";
import LandingPage from "./Pages/LandingPage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <MarqueeElement />
      <HomePage />
      <div className="how_we_work">
        <div className="how_we_work_title">How we Work</div>
        <div className="wrapper">
          {CardData.map((ele) => {
            return (
              <Card
                title={ele.title}
                body={ele.content}
                key={ele.id}
                number={ele.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

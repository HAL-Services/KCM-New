import "./styles/App.scss";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import MarqueeElement from "./components/Marquee";
function App() {
  return (
    <div className="App">
      <HomePage />
      <MarqueeElement/>
    </div>
  );
}

export default App;

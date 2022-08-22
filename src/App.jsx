import FullPage from "./Pages/FullPage";
import "./styles/App.scss";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AboutUs from "./Pages/AboutUs";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={FullPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/about" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;

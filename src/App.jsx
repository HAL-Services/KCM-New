import { Route, Switch } from "react-router-dom";

// importing componenets
import FullPage from "./Pages/FullPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ServicePage from "./Pages/ServicePage";
import ProfilePage from "./Pages/ProfilePage";
// important styles
import "./styles/App.scss";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={FullPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/service" component={ServicePage} />
        <Route exact path="/record" component={ServicePage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}

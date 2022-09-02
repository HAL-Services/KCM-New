import { Route, Switch, Redirect } from "react-router-dom";

// importing componenets
import FullPage from "./Pages/FullPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ServicePage from "./Pages/ServicePage";
import ProfilePage from "./Pages/ProfilePage";
import WriteReview from "./Pages/WriteReview";
// important styles
import "./styles/App.scss";
import { useContext } from "react";
import { Context } from "../src/context/Context";
import ContactShortly from "./Pages/ContactShortly";
export default function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={FullPage} />
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/signup">
          {user ? <Redirect to="/" /> : <SignUp />}
        </Route>
        <Route exact path="/service">
          {user ? <ServicePage /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/record">
          {user ? <ServicePage /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/settings">
          {user ? <ProfilePage /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/write" component={WriteReview} />
        <Route exact path="/shortly" component={ContactShortly} />
      </Switch>
    </div>
  );
}

import ServiceForm from "../components/ServiceForm";
import SideBar from "../components/SideBar";
import { Switch, Route } from "react-router-dom";
import "../styles/ServicePage.styles.css";
import ServiceHistory from "./ServiceHistory";
export default function ServicePage() {
  return (
    <div className="service-container">
      <SideBar className="sideBar" />
      <Switch>
        <Route exact path="/service">
          <ServiceForm className="sideBarForm" />
        </Route>
        <Route exact path="/record">
          <ServiceHistory />
        </Route>
      </Switch>
    </div>
  );
}

import { Switch, Route } from "react-router-dom";
import "../styles/ServicePage.styles.scss";
import DataTable from "../components/DataTable.jsx";
import NavBar from "../components/NavBar";

import ServiceRegistration from "./ServiceRegistrationPage";

export default function ServicePage() {
  return (
    <>
      <NavBar titles={["Book Service", "Service Record", "Profile"]} />
      <div className="service-container">
        <Switch>
          <Route exact path="/service">
            <ServiceRegistration />
          </Route>
          <Route exact path="/record">
            <DataTable />
          </Route>
        </Switch>
      </div>
    </>
  );
}

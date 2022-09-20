import { Switch, Route } from "react-router-dom";
import "../styles/ServicePage.styles.scss";
import DataTable from "../components/DataTable.jsx";
import NavBar from "../components/NavBar";

import ServiceRegistration from "./ServiceRegistrationPage";

export default function ServicePage() {
  return (
    <div>
      <NavBar titles={["Book Service", "Service Record", "Profile"]} />
      <div className="service-container">
        <Switch>
          <Route exact path="/service">
            <ServiceRegistration />
          </Route>
          <Route exact path="/record">
            <div
              style={{
                display: "flex",
                marginTop: "3rem",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontWeight: "bold" }}>Service Records</h1>
              <DataTable />
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

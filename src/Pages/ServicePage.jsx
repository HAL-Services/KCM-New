import ServiceForm from "../components/ServiceForm";
import SideBar from "../components/SideBar";
import "../styles/ServicePage.styles.css";
export default function ServicePage() {
  return (
    <div className="service-container">
      <SideBar className="sideBar" />
      <div className="sideBarFormContainer">

      <ServiceForm className="sideBarForm"/>
      </div>
    </div>
  );
}

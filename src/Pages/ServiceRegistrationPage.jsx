import ServiceForm from "../components/ServiceForm";
import "../styles/ServiceRegistration.styles.scss";
export default function ServiceRegistration() {
  return (
    <div className="service-registration-container">
      <span className="service-registration-title">BOOK YOUR SERVICE</span>
      <ServiceForm />
    </div>
  );
}

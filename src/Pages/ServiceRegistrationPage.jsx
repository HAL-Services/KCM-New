import ServiceForm from "../components/ServiceForm";
import "../styles/ServiceRegistration.styles.scss";
import bookingImage from "../Assets/Images/booking.jpg";
export default function ServiceRegistration() {
  return (
    <>
      <div className="service-registration-page">
        <div className="service-left-info-continer">
          <div className="service-information">
            <h1>Book Your Service</h1>
            <img
              style={{
                objectFit: "contain",
                height: "100%",
                width: "100%",
              }}
              src={bookingImage}
              alt="booking_img"
            />
          </div>
        </div>
        <div
          className="service-right-login-container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <ServiceForm />
        </div>
      </div>
    </>
  );
}

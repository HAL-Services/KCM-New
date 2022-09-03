import ServiceForm from "../components/ServiceForm";
import "../styles/Profile.scss";
import bookingImage from "../Assets/Images/booking.jpg";
export default function ServiceRegistration() {
  return (
    <>
      <div className="profile-page">
        <div className="profile-left-info-continer">
          <div className="profile-information">
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
          className="profile-right-login-container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <ServiceForm />
        </div>
      </div>
    </>
  );
}

import { useEffect } from "react";
import contactImage from "../Assets/Images/contact.jpg";
import "../styles/ContactShortly.styles.scss";
import { useHistory } from "react-router-dom";
export default function ContactUsSuccess() {
  const history = useHistory();
  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="contact-shortly-container">
      <div className="contact-shortly-left">
        <h1>Your  </h1>
        <p>
          Please sit back and relax. Our executive will contact you shortly.
        </p>
        <h4>Have a great day.</h4>
      </div>
      <div className="contact-shortly-right">
        <img src={contactImage} />
      </div>
    </div>
  );
}

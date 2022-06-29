import LandingImage from "../Assets/Images/LandingImage.png";
import "../styles/LandingPage.styles.css";
export default function LandingPage() {
  return (
    <>
      <div className="contactUs">
        Email Us - HalServices@gmail.com 
      </div>
      <div
        className="LandingPageContainer"
        style={{
          backgroundImage: `url(${LandingImage})`,
        }}
      >
        <div className="LandingPageWrapper">
          <h1>The German Car Expert</h1>
          <h4>Working with brands from all over the world</h4>
          <button>Quick Book</button>
          <div className="LandingText">A Car Service Station in Gurugram</div>
          <div className="LandingText1">
            One Stop Shop for all that your Car needs
          </div>
        </div>
      </div>
    </>
  );
}

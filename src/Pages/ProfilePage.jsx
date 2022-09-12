import ProfileForm from "../components/ProfileForm";
import "../styles/Profile.scss";
import updateProfile from "../Assets/Images/updateProfile.jpg";
import NavBar from "../components/NavBar";
export default function ProfilePage() {
  return (
    <div>
      <NavBar titles={["Book Service", "Service Record", "Profile"]} />
      <div className="profile-page">
        <div className="profile-left-info-continer">
          <div className="profile-information">
            <h1>Update Your Profile</h1>
            <img
              style={{
                objectFit: "contain",
                height: "100%",
                width: "100%",
              }}
              src={updateProfile}
              alt="update_img"
            />
          </div>
        </div>
        <div
          className="profile-right-login-container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}

// importing Styles
import "../styles/Profile.scss";
import ProfileForm from "../components/ProfileForm";
import ServiceBar from "../components/ServiceBar";

export default function ProfilePage() {
  return (
    <>
      <ServiceBar />
      <div className="profile-container">
        <span className="profile-title">YOUR PROFILE</span>
        <ProfileForm />
      </div>
    </>
  );
}

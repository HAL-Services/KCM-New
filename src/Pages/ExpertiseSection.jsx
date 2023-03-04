import "../styles/ExpertiseSection.scss";
import HeadingText from "../components/HeadingText";
import ExpertisePage from "../Pages/ExpertisePage";
export default function ExpertiseSection() {
  return (
    <div className="ExpertiseSection-container">
      <section>
        <HeadingText text1="Our" text2="Expertise" style="dark" />
        <ExpertisePage />
      </section>
    </div>
  );
}

import '../styles/ExpertiseSection.scss'
import WeirdTitle from "../../src/components/common/WeirdTitle";
import ExpertisePage from "../Pages/ExpertisePage.jsx";

export default function ExpertiseSection() {
  return (
    <div className="ExpertiseSection-container">
      <section>
        <WeirdTitle title="Our" backTitle="EXPERIENCE" colorTitle="Experience" />
        <ExpertisePage />
      </section>
    </div>
  );
}

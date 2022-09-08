import '../styles/ExpertiseSection.scss'

import ExpertisePage from "../Pages/ExpertisePage";
export default function ExpertiseSection() {
  return (
    <div className="ExpertiseSection-container">
      <section>
        <h1 className="about_title">Our Expertise</h1>
        <ExpertisePage />
      </section>
    </div>
  );
}

import '../styles/ExpertiseSection.scss'

import ExpertisePage from "../Pages/ExpertisePage";
export default function ExpertiseSection() {
  return (
    <div className="ExpertiseSection-container">
      <section>
        <h2 className="about_title">Our
          <h3 className="experience">Expertise
            <span>EXPERTISE</span>
          </h3>
        </h2>
        <ExpertisePage />
      </section>
    </div>
  );
}

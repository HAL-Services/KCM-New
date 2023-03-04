import '../../styles/ExpertiseSection.scss';

const WeirdTitle = ({title,backTitle,colorTitle})=>{
return(
    <div className="ExpertiseSection-container">
      <section>
        <h2 className="about_title">{title}
          <h3 className="experience">{colorTitle}
            <span>{backTitle}</span>
          </h3>
        </h2>
      </section>
    </div>
);
}

export default WeirdTitle;

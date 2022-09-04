
// importing styles
import "../styles/ServiceCard.scss";

const ServiceCard = (props) => {
  return (
    <div className="servicecard-container">
      <div className="servicecard-card">
        <div className="face face1">
          <div className="servicecard-content">
            <h3>{props.title.toUpperCase()}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="servicecard-content">
            {props.body.map((data) => {
              return <div>{data}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

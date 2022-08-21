import Card from "../components/Card";
import CardData from "../OfflineAPI/CardRelatedData";
import "../styles/Section3.styles.scss";
export default function Section3() {
  return (
    <>
      <div className="Section3how_we_work">
        <div className="Section3how_we_work_title">How we Work</div>
        <div className="Section3wrapper">
          {CardData.map((ele) => {
            return (
              <Card
                title={ele.title}
                body={ele.content}
                key={ele.id}
                number={ele.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

import Card from "../components/Card";

// import styles
import "../styles/Section4.scss";

const Section4 = () => {
  return (
    <div className="section4_container">
      <div
        className="section4_googlemap"
        style={{
          backgroundImage: `url(
            https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=en-GB&region=IN&markers=color:0xddaa44|28.4887690,77.0571610&zoom=16&client=google-presto&signature=e0_HxoXhhjW5ny4v0dBrz3MvUv4
          )`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="section4_timings">
        <Card
          title="Opening Hours"
          body={
            "Mon:	9:30 am – 6:30 pm \n\n Tue:	 9:30 am – 6:30 pm \n\n Wed:	9:30 am – 6:30 pm \n\n Thu: 9:30 am – 6:30 pm \n\n Fri:	9:30 am – 6:30 pm \n\n Sat: 	9:30 am – 6:30 pm \n\n Sun:	Closed"
          }
        />
      </div>
    </div>
  );
};

export default Section4;

import React from "react";
import classes from "./Destinations.module.css";
import Card from "../ui/Card";
import Navigation from "../../assets/navigation.svg";
import Rome from "../../assets/Rome.jpg";
import London from "../../assets/London.jpg";
import Europe from "../../assets/Europe.jpg";
const DESTINATIONS_DATA = [
  {
    id: "d1",
    image: Rome,
    place: "Rome, Italty",
    cost: "$5,42k",
    tripDuration: "10 Days Trip",
  },
  {
    id: "d2",
    image: London,
    place: "London, UK",
    cost: "$4.2k",
    tripDuration: "12 Days Trip",
  },
  {
    id: "d3",
    image: Europe,
    place: "Full Europe",
    cost: "$15k",
    tripDuration: "28 Days Trip",
  },
];
function Destinations() {
  return (
    <section className={classes.container}>
      <div className={classes.title}>
        <h4>Top Selling</h4>
        <h2>Top Destinations</h2>
      </div>
      <div className={classes.desPanel}>
        {DESTINATIONS_DATA.map((des) => (
          <Card key={des.id} className={classes.hoverring}
          >
            <img src={des.image} alt={des.place} className={classes.placePic} />
            <div className={classes.info}>
              <div className={classes.sec1}>
                <h5>{des.place}</h5>
                <h4>{des.cost}</h4>
              </div>
              <div className={classes.sec2}>
                <img src={Navigation} alt="navIcon" />
                <p>{des.tripDuration}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Destinations;

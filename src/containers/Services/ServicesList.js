import Group from "../../assets/Group 4.png";
import React from "react";
import ServiceItem from "./ServiceItem";
import classes from "./ServicesList.module.css";
import BestFlights from "../../assets/Best Flights.svg";
import CalculatedWeather from "../../assets/Calculated Weather.svg";
import LocalEvents from "../../assets/Local Events.svg";
import Customization from "../../assets/Customization.svg";

const Services_Data = [
  {
    id: "s1",
    image: CalculatedWeather,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    id: "s2",
    image: BestFlights,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    id: "s3",
    image: LocalEvents,
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening.",
  },
  {
    id: "s4",
    image: Customization,
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
  },
];
function ServicesList() {
  return (
    <section>
        <div className={classes.container1}>
        <div className={classes.title}>
          <h5>CATEGORY</h5>
          <h2>We Offer Best Services</h2>
          </div>
        <div className={classes.grpImg}>
          <img src={Group} alt="plusGroup" />
        </div>
        </div>
  
      <div className={classes.container2}>
        {Services_Data.map((service) => (
          <ServiceItem
          key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}
export default ServicesList;

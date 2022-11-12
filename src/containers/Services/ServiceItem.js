import React, { useState } from "react";
import classes from "./ServiceItem.module.css";
import Rectangle from "../../assets/Rectangle.svg";
function ServiceItem(props) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <div
        className={classes.offers}
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img src={props.image} alt={props.title} />
        <h4>{props.title}</h4>
        <p>{props.description}</p>

        <div className={
              (classes.styleImg,
              isHovering ? classes.visible : classes.invisible)
            }>
          <img
            src={Rectangle}
            alt="Rectangle"
            
          />
        </div>
      </div>
    </>
  );
}
export default ServiceItem;

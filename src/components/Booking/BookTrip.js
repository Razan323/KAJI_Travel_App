import classes from "./BookTrip.module.css";
import Card from "../../components/ui/Card";

import Choose from "../../assets/choose.svg";
import Pay from "../../assets/pay.svg";
import Reach from "../../assets/reach.svg";
import building from "../../assets/building.svg";
import leaf from "../../assets/leaf 1.svg";
import map from "../../assets/map 1.svg";
import like from "../../assets/like.svg";
import Nav from "../../assets/navigation.svg";
import Greece from "../../assets/greece.jpg";

function BookTrip() {
  return (
    <section className={classes.bookContainer}>
      <div>
        <div className={classes.bookHead}>
          <h4>Easy and Fast</h4>
          <h2>Book Your Next Trip In 3 Easy Steps</h2>
        </div>
        <div>
          <div className={classes.details}>
            <div>
              <img src={Choose} alt="choose" />
            </div>
            <div>
              <h3>Choose Destination</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className={classes.details}>
            <div>
              <img src={Pay} alt="pay" />
            </div>
            <div>
              <h3>Make Payment</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          <div className={classes.details}>
            <div>
              <img src={Reach} alt="reach" />
            </div>
            <div>
              <h3>Reach Airport on Selected Date</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Card>
          <section className={classes.trip}>
            <div className={classes.holder}>
              <img src={Greece} alt="greece" />
            </div>
            <h5>Trip To Greece</h5>
              <p>14-29 June| by Robbin</p>
              <div>
                <div className={classes.con}><img src={leaf} alt="leaf" /></div>
                <div className={classes.con}><img src={map} alt="map" /></div>
                <div className={classes.con}><img src={Nav} alt="nav" /></div>
              </div>
              <div className={classes.con1}>
                <img src={building} alt="building" />
                <p>24 people</p>
                <img src={like} alt="like"/>
              </div>
              
          </section>
        </Card>
      </div>
    </section>
  );
}
export default BookTrip;

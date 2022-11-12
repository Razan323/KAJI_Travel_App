import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Decore from "../../assets/Decore2.svg";
import Plane from "../../assets/plane.svg";
import Traveller from "../../assets/Traveller 1.png";
import classes from "./TopHeaderSec.module.css";
function TopHeaderSec() {
  return (
    <section className={classes.topSection}>
      <div className={classes.sec1}>
        <h4>BEST DESTINATIONS AROUND THE WORLD</h4>

        <h1>
          Travel, <img src={Decore} alt="decore" className={classes.decImg} />
          enjoy and live a new and full life
        </h1>

        <p>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div>
          <button className={classes.btn1}>Find out more</button>
          <button className={classes.btn2}>
            <FontAwesomeIcon
              icon={faCirclePlay}
              size="2x"
              className={classes.icon}
            />
            play Demo
          </button>
        </div>
      </div>
      <div className={classes.sec2}>
        <img src={Plane} alt="plane" className={classes.planeImg} />
        <img src={Traveller} alt="traveller" className={classes.trvImg} />
      </div>
    </section>
  );
}

export default TopHeaderSec;

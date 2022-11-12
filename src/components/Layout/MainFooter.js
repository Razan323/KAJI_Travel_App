import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import GooglePlay from "../../assets/Google Play.svg";
import PlayStore from "../../assets/Play Store.svg";
import classes from "./MainFooter.module.css";
function MainFooter() {
  return (
    <footer className={classes.footerCon}>
      <div className={classes.sec1}>
        <h4>Jadoo</h4>
        <p>Book your trip in minute, get full Control for much longer.</p>
      </div>
      <div className={classes.sec2}>
        <div>
          <h5>company</h5>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affilates</li>
          </ul>
        </div>
        <div>
          <h5>More</h5>
          <ul>
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
      </div>
      <div className={classes.sec3}>
        <div className={classes.socialContact}>
          <div>
            <img src={Facebook} alt="facebook"/>
          </div>
          <div>
            <img src={Instagram} alt="instagram" />
          </div>
          <div>
            <img src={Twitter} alt="twitter" />
          </div>
        </div>
        <div className={classes.dis}><p>Discover our app</p>
        <img src={GooglePlay} alt="Google play" />
        <img src={PlayStore} alt="App store" /></div>
        
      </div>
      <br />
      <p className={classes.rights}>All rights reserved@jadoo.co</p>
    </footer>
  );
}
export default MainFooter;

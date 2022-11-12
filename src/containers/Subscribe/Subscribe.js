import classes from "./Subscribe.module.css";

function Subscribe() {
  return (
    <section className={classes.subContainer}>
      <h1>
        Subscribe to get information, latest news and other interesting offers
        about Cobham
      </h1>
      <div className={classes.submit}>
        <input type="email" placeholder="Your email" />
        <button className={classes.btn}>Subscribe</button>
      </div>
    </section>
  );
}
export default Subscribe;

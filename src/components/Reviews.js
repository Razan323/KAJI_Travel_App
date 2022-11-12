import classes from './Reviews.module.css';
import temp2 from '../assets/temp2.svg';
import Group61 from '../assets/Group 61.svg';

function Reviews () {
    return (
        <section className={classes.reviewsContainer}>
          <div className={classes.txt}>
             <h4>Testimonials</h4>
             <h2>What People Say About Us.</h2> 
             <img src={Group61} alt='style' />
          </div>
          <div>
              <img src={temp2} alt='temp' />
          </div>
        </section>
    );
}
export default Reviews;
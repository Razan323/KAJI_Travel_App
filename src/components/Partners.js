import classes from './Partners.module.css';
import Axon from '../assets/image 27.png';
import Jetstar from '../assets/image 28.png';
import Expedia from '../assets/image 29.png';
import Qantas from '../assets/image 30.png';
import Alitalia from '../assets/image 31.png';
function Partners(){
    return (
        <div className={classes.container}>
            <div>
            <img src={Axon} alt='Axon' />
             </div>
            <div><img src={Jetstar} alt='Jetstar' /></div>
            <div><img src={Expedia} alt='Expedia' /></div>
            <div><img src={Qantas} alt='Qantas' /></div>
            <div><img src={Alitalia} alt='Alitalia' /></div>
        </div>
    );
}
export default Partners;
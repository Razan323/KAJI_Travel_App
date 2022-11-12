import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.svg';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li>Destinations</li>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Bookings</li>
                    <li>Login</li>
                    <li><button className={classes.btn} >Sign up</button></li>
                    <li>EN<FontAwesomeIcon icon={faChevronDown} className={classes.icon}></FontAwesomeIcon></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
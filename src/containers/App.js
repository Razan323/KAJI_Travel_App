
import Layout from '../components/Layout/Layout';
import ServicesList from './Services/ServicesList';
import Destinations from '../components/Destinations/Destinations';
import Partners from '../components/Partners';
import BookTrip from '../components/Booking/BookTrip';
import Reviews from '../components/Reviews';
import Subscribe from './Subscribe/Subscribe';
import MainFooter from '../components/Layout/MainFooter';

function App() {
  return (
    <div className="App">
      <Layout />
      <ServicesList />
      <Destinations />
      <BookTrip />
      <Reviews />
      <Partners />
      <Subscribe />
      <MainFooter />
    </div>
  );
}

export default App;

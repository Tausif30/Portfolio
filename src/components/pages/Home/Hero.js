import { Link } from 'react-router-dom';
import Me from './assets/Me.jpg'
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Tausif Ibne Iqbal</h1>
          <p>
            On a journey to becoming a better me and change the world.
          </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Download CV
          </Link>
        </div>
        <img
          className="hero-image"
          src={Me}
          alt="Me"
        />
      </div>
    </section>
  );
};

export default Hero;

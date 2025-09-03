import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoWhiteImage from './assets/logo.png';
import pages from '../../utils/pages';

const socials = [
  { icon: faFacebook, name: 'facebook', },
  { icon: faInstagram, name: 'instagram', },
];

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img
          className="site-footer-logo" 
          src={logoWhiteImage} 
          alt="Little Lemon" 
        />
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
            {navLinks.map((navLink, index) => 
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="site-footer-social">
          <h4>Connect with me</h4>
          <a 
            href="https://www.facebook.com/tausif.30"
            target="_blank"
            rel="noreferrer" 
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a 
            href="https://www.instagram.com/tausif.30"
            target="_blank"
            rel="noreferrer" 
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a 
            href="https://www.github.com/Tausif30"
            target="_blank"
            rel="noreferrer" 
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a 
            href="https://www.linkedin.com/in/tausif-ibne-iqbal-0232a937a/"
            target="_blank"
            rel="noreferrer" 
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

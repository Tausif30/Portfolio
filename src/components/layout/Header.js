import { useEffect, useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import bars from './assets/bars.svg'
import cross from './assets/cross.svg'
import logoImage from './assets/logo.png';
import './Header.css';
import pages from '../../utils/pages';

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Header = () => {
  const headerRef = useRef(null);
  useEffect(()=>{
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if(!headerElement){
        return;
      }
      if(prevScrollPos > currentScrollPos){
        headerElement.style.transform = "translateY(0)";
      }
      else{
        headerElement.style.transform = "translateY(200px)";
      }
      prevScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)
    return ()=> {
      window.removeEventListener('scroll', handleScroll)
    }
  },[]);

const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <header>
      <nav className="container grid nav-bar">
        <Link className="nav-bar-logo" to={pages.get('home').path}>
          <img src={logoImage} alt="Tausif Ibne Iqbal Logo" />
        </Link>
        <button
          className="nav-bar-hamburger"
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? (
          <img src={cross} alt="Close menu" width="32" height="32" />
        ) : (
          <img src={bars} alt="Open menu" width="32" height="32" />
        )}
        </button>
        <ul
          className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {navLinks.map((navLink, index) =>
            <li key={index}>
              <Link
                className={pathname === navLink.path ? 'active' : ''}
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;

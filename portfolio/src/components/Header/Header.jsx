import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CV from '../../assets/MALEKA-LA-CV-2024.pdf';

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  // Smooth scroll handling
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="header-fixed">
      <Link to="#home" className="logo" onClick={closeMenu}>
        <span>{"Nolo "}</span>
        <span>{"Maleka"}</span>
      </Link>
      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>
      <nav className={isActive ? 'active' : ''}>
        <Link to="#home" onClick={closeMenu}>
          Home
        </Link>
        <Link to="#about" onClick={closeMenu}>
          About me
        </Link>
        <Link to="#project" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="#contact" onClick={closeMenu}>
          Contact
        </Link>
        <a href={CV} download className="button">
          Download CV
        </a>
      </nav>
      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Close menu' : 'Open menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => {
          setActive(!isActive);
        }}
      >
        {/* Added div for the middle line */}
        <div className="middle-line"></div>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import images from '../images/images';
import './Header.css'


function Header({ cartCount, onCartClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };
useEffect(() => {
  document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
}, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      isMobileMenuOpen &&
      navRef.current &&
      !navRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false);
    }
  };
  document.addEventListener('click', handleClickOutside); // ✅ Changed here
  return () => document.removeEventListener('click', handleClickOutside); // ✅ And here
}, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'Products', section: 'shop' },
    { name: 'About', section: 'about' },
    { name: 'Contact', section: 'contact' },
    { name: 'Customized', section: 'custom-order-button' }
  ];

   return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src={images.logo} alt="Dermatoes Naturals" />
          </Link>

          <nav ref={navRef} className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink 
                    to={item.section === 'home' ? '/' : `#${item.section}`}
                    className="nav-link"
                    onClick={() => {
                      if (item.section === 'home') {
                        setIsMobileMenuOpen(false);
                      } else {
                        scrollToSection(item.section);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-right">
            <button className="cart-button" onClick={onCartClick}>
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>

            <button
  className="mobile-menu-button"
  onClick={(e) => {
    e.stopPropagation(); // Prevent outside click from triggering
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }}
>
  {isMobileMenuOpen ? (
    <i className="fas fa-times"></i>
  ) : (
    <i className="fas fa-bars"></i>
  )}
</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
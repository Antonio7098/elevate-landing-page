import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest(`.${styles.nav}`) && !target.closest(`.${styles.menuButton}`)) {
        setIsMenuOpen(false);
      }
    };

    // Handle scroll for header
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>Elevate</div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <li className={styles.navItem}>
              <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
            </li>
            <li className={styles.navItem}>
              <a href="#science" onClick={() => setIsMenuOpen(false)}>The Science</a>
            </li>
            <li className={styles.navItem}>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            </li>
          </ul>
          <div className={styles.authButtons}>
            <a href="/login" className={styles.loginLink} onClick={() => setIsMenuOpen(false)}>Log In</a>
            <a href="/signup" className={styles.signupButton} onClick={() => setIsMenuOpen(false)}>Sign Up</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

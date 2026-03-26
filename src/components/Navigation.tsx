'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.css';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigationTimeoutRef = useRef<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isNavigating || isMobileMenuOpen) return; // Ignore programmatic scroll and open mobile menu

    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }
  });

  const handleLinkClick = () => {
    if (navigationTimeoutRef.current) {
      window.clearTimeout(navigationTimeoutRef.current);
    }

    setIsNavigating(true);
    setHidden(false);
    setIsMobileMenuOpen(false);

    navigationTimeoutRef.current = window.setTimeout(() => {
      setIsNavigating(false);
      navigationTimeoutRef.current = null;
    }, 1400);
  };

  useEffect(() => {
    const sections = ['home', 'about', 'education', 'experience', 'projects', 'publications', 'skills', 'contact'];
    
    // rootMargin uses -50% to trigger precisely when a section hits the middle of viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach(sec => {
      const element = document.getElementById(sec);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      if (navigationTimeoutRef.current) {
        window.clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.nav 
      className={styles.nav}
      variants={{
        visible: { y: 0, x: '-50%', opacity: 1 },
        hidden: { y: -100, x: '-50%', opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <Link href="#home" onClick={handleLinkClick} className={styles.logo}>ZN</Link>
      <div className={styles.desktopLinks}>
        {navLinks.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            onClick={handleLinkClick}
            className={`${styles.link} ${activeSection === item.id ? styles.active : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className={styles.mobileActions}>
        <button
          type="button"
          className={`${styles.menuButton} ${isMobileMenuOpen ? styles.menuButtonOpen : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => {
            setHidden(false);
            setIsMobileMenuOpen((value) => !value);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        {navLinks.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            onClick={handleLinkClick}
            className={`${styles.mobileLink} ${activeSection === item.id ? styles.active : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}

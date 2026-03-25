'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);
  const navigationTimeoutRef = useRef<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isNavigating) return; // Ignore programmatic scroll

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
    return () => {
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
      <div className={styles.links}>
        <Link href="#about" onClick={handleLinkClick} className={`${styles.link} ${activeSection === 'about' ? styles.active : ''}`}>About</Link>
        <Link href="#education" onClick={handleLinkClick} className={`${styles.link} ${activeSection === 'education' ? styles.active : ''}`}>Education</Link>
        <Link href="#experience" onClick={handleLinkClick} className={`${styles.link} ${activeSection === 'experience' ? styles.active : ''}`}>Experience</Link>
        <Link href="#projects" onClick={handleLinkClick} className={`${styles.link} ${activeSection === 'projects' ? styles.active : ''}`}>Projects</Link>
        <Link href="#publications" onClick={handleLinkClick} className={`${styles.link} ${activeSection === 'publications' ? styles.active : ''}`}>Publications</Link>
        <Link href="#skills" onClick={handleLinkClick} className={`${styles.link} ${activeSection === 'skills' ? styles.active : ''}`}>Skills</Link>
        <Link href="#contact" onClick={handleLinkClick} className={`${styles.link} ${activeSection === 'contact' ? styles.active : ''}`}>Contact</Link>
      </div>
    </motion.nav>
  );
}

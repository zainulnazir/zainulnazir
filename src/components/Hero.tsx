'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from './Hero.module.css';

// Dynamically import the 3D Scene with ssr: false to prevent mobile WebGL hydration crashes
const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.canvasContainer}>
        <HeroScene />
      </div>

      <div className={styles.content}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Zain Ul Nazir
        </motion.h1>
        
        <motion.h2 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-gradient">Biomedical Engineer & Software Developer</span>
        </motion.h2>

        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Building medical devices, clinical workflows, and healthcare software with a focus on reliability, usability, and practical impact.
        </motion.p>
        
        <motion.div
           className={styles.ctaContainer}
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
        >
           <a href="/resume.pdf" download className={styles.primaryButton}>
             Download Resume
           </a>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section className={styles.education} id="education">
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Education.</h2>
        </motion.div>

        <div className={styles.timeline}>
          <motion.div 
            className={`glass-panel ${styles.card}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <FaGraduationCap size={24} color="var(--accent-cyan)" />
              </div>
              <div className={styles.headerText}>
                <h3 className={styles.degree}>B.Tech in Biomedical Engineering</h3>
                <h4 className={styles.institution}>Government College of Engineering & Technology, Kashmir</h4>
              </div>
              <span className={styles.date}>Nov 2020 – June 2025</span>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>CGPA</span>
                <span className={styles.statValue}>7.48</span>
              </div>
            </div>

            <div className={styles.focus}>
              <h5 className={styles.focusTitle}>Core Focus Areas:</h5>
              <div className={styles.focusTags}>
                <span>Bio-Medical Instrumentation</span>
                <span>Medical Imaging</span>
                <span>Tissue Engineering</span>
                <span>Anatomy & Physiology</span>
                <span>Biomaterials</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

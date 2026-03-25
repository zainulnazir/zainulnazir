'use client';

import { motion } from 'framer-motion';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Clinical Experience.</h2>
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
              <div>
                <h3 className={styles.role}>Biomedical Engineering Intern</h3>
                <h4 className={styles.company}>TBS India (S.M.H.S Hospital, Srinagar)</h4>
              </div>
              <span className={styles.date}>2024</span>
            </div>
            <ul className={styles.list}>
              <li>Performed preventive maintenance, calibration support, and functional checks for critical care equipment in a hospital environment.</li>
              <li>Worked alongside senior clinical engineers on troubleshooting workflows for medical imaging and life-support systems, building practical exposure to fault diagnosis and service processes.</li>
              <li>Supported equipment documentation, asset tracking, and technical reporting used in day-to-day clinical engineering operations.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

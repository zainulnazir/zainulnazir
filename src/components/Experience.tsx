'use client';

import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const highlights = [
  'Performed preventive maintenance, calibration support, and functional checks for critical care equipment in a real hospital setting.',
  'Worked alongside senior clinical engineers on troubleshooting workflows for medical imaging and life-support systems.',
  'Supported equipment documentation, asset tracking, and technical reporting used in day-to-day clinical engineering operations.',
];

const serviceAreas = [
  'Preventive Maintenance',
  'Calibration Support',
  'Medical Imaging Systems',
  'Life-Support Equipment',
  'Technical Reporting',
];

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

        <div className={styles.timelineShell}>
          <motion.div
            className={styles.timelineLine}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.article
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className={styles.metaColumn}>
              <span className={styles.date}>2024</span>
              <p className={styles.metaLabel}>Srinagar</p>
              <p className={styles.metaSub}>Field Service and Clinical Engineering</p>
            </div>

            <div className={styles.markerColumn}>
              <span className={styles.markerOuter}>
                <span className={styles.markerInner} />
              </span>
            </div>

            <motion.div
              className={`glass-panel ${styles.card}`}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.cardHeader}>
                <div>
                  <p className={styles.kicker}>Biomedical Engineering Internship</p>
                  <h3 className={styles.role}>TBS India at S.M.H.S Hospital, Srinagar</h3>
                  <p className={styles.summary}>
                    Worked in a hospital-facing environment supporting clinical engineering and field service workflows around equipment readiness, troubleshooting, and documentation.
                  </p>
                </div>
              </div>

              <ul className={styles.list}>
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.tagRow}>
                {serviceAreas.map((item) => (
                  <span key={item} className={styles.tag}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

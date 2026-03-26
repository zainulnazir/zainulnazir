'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import styles from './Education.module.css';

const focusAreas = [
  'Bio-Medical Instrumentation',
  'Medical Imaging',
  'Tissue Engineering',
  'Anatomy & Physiology',
  'Biomaterials',
];

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
              <span className={styles.date}>2020 - 2025</span>
              <p className={styles.metaLabel}>CGPA</p>
              <p className={styles.metaValue}>7.48</p>
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
                <div className={styles.iconContainer}>
                  <FaGraduationCap size={22} color="var(--accent-cyan)" />
                </div>
                <div className={styles.headerText}>
                  <p className={styles.kicker}>Academic Foundation</p>
                  <h3 className={styles.degree}>B.Tech in Biomedical Engineering</h3>
                  <h4 className={styles.institution}>Government College of Engineering &amp; Technology, Kashmir</h4>
                  <p className={styles.summary}>
                    Built a strong foundation in biomedical systems, instrumentation, medical imaging, biomaterials, and applied engineering concepts that continue to shape my work across healthcare technology and software.
                  </p>
                </div>
              </div>

              <div className={styles.focus}>
                <p className={styles.focusTitle}>Core Focus Areas</p>
                <div className={styles.focusTags}>
                  {focusAreas.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

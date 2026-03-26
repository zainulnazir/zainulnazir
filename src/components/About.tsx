'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>About Me.</h2>
        </motion.div>

        <motion.div
          className={`glass-panel ${styles.feature}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.portraitLayer}>
            <Image
              src="/images/zain-profile-cutout.png"
              alt="Portrait of Zain Ul Nazir"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 55vw, 48vw"
              className={styles.portrait}
              priority
            />
          </div>

          <div className={styles.overlay} />

          <div className={styles.content}>
            <p className={styles.profileText}>
              Biomedical engineer with hands-on field service experience at S.M.H.S Hospital, Srinagar through TBS India, with practical exposure to medical equipment support, preventive maintenance, calibration workflows, troubleshooting, and technical reporting in a clinical environment.
            </p>
            <p className={styles.supportingText}>
              My academic background in Biomedical Engineering from Government College of Engineering &amp; Technology, Kashmir has given me a foundation in medical instrumentation, medical imaging, biomaterials, and core engineering principles, while my practical work has helped me understand how reliability, safety, and clinical workflow integration matter in real healthcare settings.
            </p>
            <p className={styles.supportingText}>
              Alongside biomedical engineering, I have also been building in software, automation, and AI-focused workflows, with work spanning medical device prototyping, biomedical CAD exploration, healthcare software, and intelligent diagnostic concepts. I am most interested in opportunities where biomedical systems, computer science, and applied AI come together to improve how healthcare technologies are designed, supported, and used.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

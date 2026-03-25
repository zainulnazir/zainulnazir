'use client';

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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>About Me.</h2>
        </motion.div>

        <div className={styles.grid}>
          <motion.div 
            className={`glass-panel ${styles.card}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={styles.cardTitle}>The Journey</h3>
            <p className={styles.text}>
              I am a <strong>Biomedical Engineering graduate</strong> from the Government College of Engineering & Technology, Kashmir, with experience spanning clinical engineering, device prototyping, and software-driven problem solving. My work has grown from understanding medical equipment in real hospital settings to building healthcare-focused tools, interfaces, and technical concepts that are both practical and user-centered.
            </p>
          </motion.div>

          <motion.div 
            className={`glass-panel ${styles.card}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className={styles.cardTitle}>Vision</h3>
            <p className={styles.text}>
              I want to build products where biomedical engineering and software come together in a meaningful way, whether that means smarter clinical workflows, better diagnostic support tools, or medical technologies that are easier to deploy, maintain, and trust in real-world environments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

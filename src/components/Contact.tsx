'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaTwitter, FaFileAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Let&apos;s Connect.</h2>
          <p className={styles.text}>
            I am open to roles across biomedical engineering, healthcare technology, medical devices, and software-focused engineering work. If you are hiring, collaborating, or would like to discuss a project, feel free to reach out.
          </p>

          <div className={styles.links}>
            <a href="mailto:zaynulnazir@gmail.com" className={styles.link}>
              <FaEnvelope size={24} />
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/zainulnazir" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FaLinkedinIn size={24} />
              <span>LinkedIn</span>
            </a>
            <a href="https://instagram.com/zainulnazir" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FaInstagram size={24} />
              <span>Instagram</span>
            </a>
            <a href="https://twitter.com/zainulnazir" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FaTwitter size={24} />
              <span>Twitter</span>
            </a>
            <a href="/resume.pdf" download className={styles.link}>
              <FaFileAlt size={24} />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

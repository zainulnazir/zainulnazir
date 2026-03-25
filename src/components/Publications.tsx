'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';
import styles from './Publications.module.css';

const publications = [
  {
    title: 'Development of a Low-Cost, Real-Time Near-Infrared (NIR) Vein Visualization System',
    authors: 'Zain Ul Nazir, Basit Bhat',
    status: 'Submitted for Publication',
    description: 'A study centered on the design and evaluation of an accessible NIR-based vein visualization system, combining open hardware, real-time processing, and practical medical-device thinking to explore lower-cost vein-assistance technology.',
    date: '2025',
    link: '/Research_NIR_Vein_Finder.pdf',
  },
];

export default function Publications() {
  return (
    <section className={styles.publications} id="publications">
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Publications.</h2>
        </motion.div>

        <div className={styles.grid}>
          {publications.map((pub, index) => (
            <motion.div 
              key={index}
              className={`glass-panel ${styles.card}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={styles.cardHeader}>
                <FaBookOpen className={styles.icon} size={28} />
                <span className={styles.status}>{pub.status}</span>
              </div>
              <h3 className={styles.pubTitle}>{pub.title}</h3>
              <p className={styles.authors}>{pub.authors}</p>
              <p className={styles.description}>{pub.description}</p>
              
              <div className={styles.footer}>
                <span className={styles.date}>{pub.date}</span>
                {pub.link !== '#' && (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Read Paper <FaExternalLinkAlt size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

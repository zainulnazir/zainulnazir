'use client';

import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const categories = [
  {
    title: "Clinical & Biomedical Systems",
    skills: ["Equipment Calibration", "Preventive Maintenance", "QA/QC", "Patient Safety Protocols", "Medical Imaging Systems", "Technical Reporting"]
  },
  {
    title: "Medical Device Design",
    skills: ["SolidWorks 3D Modeling", "Optical Systems (NIR/NoIR)", "Hardware Prototyping", "Experimental Validation", "Biomaterials & Tissue Engineering", "Technical Documentation"]
  },
  {
    title: "Software & Automation",
    skills: ["Python", "TypeScript", "React/Next.js", "Linux", "Workflow Automation (n8n)", "AI Workflow Integration", "C", "MATLAB"]
  }
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Expertise.</h2>
        </motion.div>

        <div className={styles.content}>
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className={styles.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.tagCloud}>
                {category.skills.map((skill) => (
                  <motion.span 
                    key={skill} 
                    className={styles.tag}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

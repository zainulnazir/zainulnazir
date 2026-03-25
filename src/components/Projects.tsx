'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'NIR Vein Finder',
    description: 'Designed and developed a near-infrared vein visualization prototype using Raspberry Pi and NoIR imaging hardware, paired with a real-time interface for vessel enhancement and low-cost clinical experimentation.',
    tags: ['Python', 'Medical Imaging', 'Raspberry Pi'],
    github: 'https://github.com/zainulnazir/vein-finder',
    demo: '#',
    color: 'var(--accent-cyan)',
  },
  {
    title: 'CuraLytica',
    description: 'Built as a healthcare AI concept around medical imaging analysis, focusing on machine learning-assisted diagnosis workflows, data handling, and a scalable foundation for clinical decision-support software.',
    tags: ['AI/ML', 'Healthcare Software', 'Python'],
    github: 'https://github.com/zainulnazir/CuraLytica',
    demo: '#',
    color: 'var(--accent-teal)',
  },
  {
    title: 'Lumbar Spine Implant Concept',
    description: 'A collaborative biomechanics project for a lumbar spine implant concept, where I handled most of the CAD modeling and technical exploration involved in shaping the design and evaluating it as a biomedical engineering concept.',
    tags: ['Biomechanics', 'CAD/CAE', 'SimScale'],
    github: '#',
    demo: 'https://www.simscale.com/projects/zainulnazir/lumber_spine/',
    color: 'var(--accent-purple)',
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Featured Work.</h2>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`glass-panel ${styles.card}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <div className={styles.links}>
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag} style={{ borderColor: project.color, color: project.color }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import styles from './CorePrinciples.module.css';

const principles = [
  {
    icon: '🧠',
    title: 'Active Recall',
    description: 'Strengthen memory by actively retrieving information rather than passive review.'
  },
  {
    icon: '⏱️',
    title: 'Spaced Repetition',
    description: 'Optimize learning by reviewing material at increasing intervals over time.'
  },
  {
    icon: '🔍',
    title: 'Cognitive Science',
    description: 'Leverage research-backed techniques to enhance understanding and retention.'
  }
];

const CorePrinciples: React.FC = () => {
  return (
    <section className={styles.section} id="science">
      <h2 className={styles.sectionTitle}>Built on Proven Learning Science</h2>
      <div className={styles.principlesGrid}>
        {principles.map((principle, index) => (
          <div key={index} className={styles.principleCard}>
            <div className={styles.icon} aria-hidden="true">{principle.icon}</div>
            <div className={styles.principleContent}>
              <h3 className={styles.principleTitle}>{principle.title}</h3>
              <p className={styles.principleDescription}>{principle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CorePrinciples;

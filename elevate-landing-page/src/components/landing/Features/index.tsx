import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import styles from './Features.module.css';

type Feature = {
  id: string;
  title: string;
  description: string;
  visual: string;
  reversed?: boolean;
};

const features: Feature[] = [
  {
    title: 'AI-Powered Question Generation',
    description: 'Our advanced AI analyzes your notes and generates targeted questions to test your understanding and highlight knowledge gaps.',
    visual: '📝',
    id: 'ai-questions'
  },
  {
    title: 'Personalized Review Schedules',
    description: 'Smart algorithms determine the optimal time to review material based on your performance and the forgetting curve.',
    visual: '⏰',
    id: 'schedules',
    reversed: true
  },
  {
    title: 'Deep Conceptual Understanding',
    description: 'Go beyond rote memorization with our U-U-E (Understand-Use-Explain) framework that ensures true mastery of concepts.',
    visual: '🧩',
    id: 'understanding'
  }
];

const Features: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section className={styles.section} id="features" aria-label="Features">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Powerful Features for Effective Learning</h2>
          <p className={styles.sectionSubtitle}>
            Designed to help you learn faster and remember longer
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.featuresList}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              className={`${styles.feature} ${feature.reversed ? styles.reversed : ''}`}
              variants={item}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              aria-labelledby={`feature-${feature.id}-title`}
            >
              <div className={styles.featureVisual} aria-hidden="true">
                <div className={styles.visualPlaceholder}>
                  {feature.visual}
                </div>
              </div>
              <div className={styles.featureContent}>
                <h3 id={`feature-${feature.id}-title`} className={styles.featureTitle}>
                  {feature.title}
                </h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

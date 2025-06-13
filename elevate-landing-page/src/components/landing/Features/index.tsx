import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import styles from './Features.module.css';

type Feature = {
  id: string;
  title: string;
  description: string;
  visual: string;
  cta: string;
  ctaLink: string;
  reversed?: boolean;
};

const features: Feature[] = [
  {
    title: 'Cut Through the Noise. Focus on What Matters.',
    description: 'Stop spending hours creating study materials and trying to guess what\'s important. Paste your notes, articles, or documents, and let Elevate\'s AI instantly deconstruct the content into core \'Fundamental Ideas\' and generate targeted questions. We handle the prep work, so you can focus on learning.',
    visual: '📝', // Placeholder for a more complex visual representation
    id: 'learn-faster',
    cta: 'Learn More About AI Deconstruction →',
    ctaLink: '/ai-deconstruction'
  },
  {
    title: 'Powered by Science, Built for Retention.',
    description: 'Forgetting what you\'ve worked hard to learn is frustrating. Elevate is built on two scientific pillars of long-term memory: Active Recall, with AI-generated questions that force you to retrieve knowledge, and Spaced Repetition, with an intelligent algorithm that schedules reviews at the perfect moment to interrupt the forgetting curve and embed knowledge deep in your memory.',
    visual: '📊', // Placeholder for the Ebbinghaus forgetting curve visualization
    id: 'remember-longer',
    reversed: true,
    cta: 'Explore the Science →',
    ctaLink: '/learning-science'
  },
  {
    title: 'Your Progress, Visualized.',
    description: 'Understand your learning like never before. Elevate provides detailed statistics and beautiful visualizations for every folder and question set. Track your mastery over time, see your U-U-E (Understand, Use, Explore) scores develop, and watch your forgetting curve flatten. Turn your hard work into tangible, visible results.',
    visual: '📈', // Placeholder for progress tracking visualization
    id: 'witness-growth',
    cta: 'See a Demo of Tracking →',
    ctaLink: '/progress-tracking'
  },
  {
    title: 'A Learning Co-Pilot That Knows You.',
    description: 'Every learner is unique. Elevate\'s AI pays attention. It learns your strengths, weaknesses, and even your preferred learning style over time. Get chat explanations tailored to your level of understanding, and receive newly generated questions that specifically target the concepts you need to strengthen. This is a learning partner that evolves with you.',
    visual: '🤖', // Placeholder for personalization graphic
    id: 'deep-personalization',
    reversed: true,
    cta: 'Discover Personalization →',
    ctaLink: '/personalization'
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
          <h2 className={styles.sectionTitle}>Your AI Learning Companion</h2>
          <p className={styles.sectionSubtitle}>
            Transform how you learn, remember, and grow
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
                <a href={feature.ctaLink} className={styles.featureCta}>
                  {feature.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import { motion } from 'framer-motion';
import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  index?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  avatar,
  index = 0
}) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    hover: {
      y: -4,
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-20% 0px' }}
      custom={index}
      aria-labelledby={`testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={styles.quoteMark} aria-hidden="true">"</div>
      
      <motion.div 
        className={styles.content}
        variants={contentVariants}
      >
        <motion.p 
          className={styles.quote}
          variants={itemVariants}
          id={`testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {quote}
        </motion.p>
        
        <motion.div 
          className={styles.author}
          variants={itemVariants}
        >
          {avatar ? (
            <div className={styles.avatar}>
              <img 
                src={avatar} 
                alt="" 
                aria-hidden="true"
                width={48}
                height={48}
                loading="lazy"
              />
            </div>
          ) : (
            <div 
              className={styles.avatar} 
              aria-hidden="true"
            >
              {name.charAt(0).toUpperCase()}
            </div>
          )}
          <div className={styles.authorInfo}>
            <div className={styles.name}>{name}</div>
            <div className={styles.role}>{role}</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;

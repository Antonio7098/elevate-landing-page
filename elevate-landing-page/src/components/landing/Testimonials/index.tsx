import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    quote: "Elevate has completely transformed how I study for my medical exams. The AI-generated questions help me identify my weak areas, and the spaced repetition ensures I remember everything long-term.",
    name: "Sarah Johnson",
    role: "Medical Student, 3rd Year",
    avatar: ""
  },
  {
    id: 2,
    quote: "As a professional preparing for certification exams, I needed a more efficient way to study. Elevate's personalized approach cut my study time in half while improving my retention.",
    name: "Michael Chen",
    role: "IT Professional",
    avatar: ""
  },
  {
    id: 3,
    quote: "The U-U-E framework has been a game-changer for understanding complex concepts. I'm not just memorizing anymore—I'm truly learning and applying the material.",
    name: "Emily Rodriguez",
    role: "Graduate Student in Psychology",
    avatar: ""
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Our Users Say</h2>
        <p className={styles.sectionSubtitle}>Join thousands of learners who have transformed their study habits</p>
        
        <motion.div 
          className={styles.testimonialsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20% 0px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

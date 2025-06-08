import React from 'react';
import styles from './InsightCatalystHighlight.module.css';

const InsightCatalystHighlight: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Unlock Deeper Memory with Insight Catalysts</h2>
          <p className={styles.description}>
            Our AI doesn't just test your knowledge—it helps you build stronger neural connections. 
            By suggesting personalized analogies, memorable acronyms, and vivid imagery, 
            Elevate transforms abstract concepts into sticky, memorable insights.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🔍</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Personalized Analogies</h3>
                <p className={styles.featureText}>
                  Connect new information to what you already know with relevant analogies.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🧠</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Memory Techniques</h3>
                <p className={styles.featureText}>
                  Leverage proven mnemonic devices to boost recall and understanding.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✨</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Visual Learning</h3>
                <p className={styles.featureText}>
                  Turn complex ideas into visual representations that stick in your memory.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.visualPlaceholder}>
            <div className={styles.visualContent}>
              <div className={styles.visualIcon}>💡</div>
              <div className={styles.visualText}>Insight Catalyst</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightCatalystHighlight;

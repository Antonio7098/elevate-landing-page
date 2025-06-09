import React, { useState, FormEvent } from 'react';
import styles from './Hero.module.css';

const BookTabletMockup = () => (
  <svg
    className={styles.bookTabletMockup}
    viewBox="0 0 320 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="20" y="40" width="200" height="320" rx="24" fill="#2D3A8C"/>
    <rect x="40" y="60" width="160" height="280" rx="16" fill="#fff"/>
    <rect x="80" y="100" width="80" height="200" rx="8" fill="#F3F4F6"/>
    <circle cx="120" cy="360" r="8" fill="#CBD5E1"/>
    <rect x="100" y="370" width="40" height="8" rx="4" fill="#CBD5E1"/>
    <rect x="240" y="80" width="60" height="260" rx="12" fill="#FFB199"/>
    <rect x="250" y="100" width="40" height="220" rx="8" fill="#fff"/>
    <rect x="255" y="110" width="30" height="200" rx="6" fill="#F3F4F6"/>
  </svg>
);

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error joining waitlist:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroLeft}>
        <BookTabletMockup />
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>Success starts with a great design book</h1>
        <p className={styles.subheadline}>
          Morbi leo tortor, fermentum sed orci vitae, tempor auctor turpis. Fusce bibendum accumsan finibus. Nulla aliquam luctus sem, at posuere nibh lobortis et. Ut ac mollis risus, eu congue libero. Nulla vestibulum ultricies tortor at ultricies.
        </p>
        {isSubmitted ? (
          <div className={styles.successMessage}>
            <svg className={styles.successIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>You're on the waitlist!</h3>
            <p>We'll be in touch soon with early access details.</p>
          </div>
        ) : (
          <form className={styles.ctaForm} onSubmit={handleSubmit} noValidate>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`${styles.emailInput} ${error ? styles.error : ''}`}
                disabled={isLoading}
                aria-label="Email address"
                aria-invalid={!!error}
                aria-describedby={error ? 'email-error' : undefined}
              />
              {error && (
                <div id="email-error" className={styles.errorMessage} role="alert">
                  {error}
                </div>
              )}
            </div>
            <button 
              type="submit" 
              className={styles.ctaButton}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className={styles.spinner}></span>
                  <span>Joining...</span>
                </>
              ) : (
                'Get the Book'
              )}
            </button>
          </form>
        )}
        <div className={styles.trustBadges}>
          <div className={styles.trustBadge}>
            <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>No credit card required</span>
          </div>
          <div className={styles.trustBadge}>
            <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

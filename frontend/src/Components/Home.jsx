import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

const STATS = [
  { value: '150K+', label: 'Students Guided' },
  { value: '5+', label: 'Office Locations' },
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Partner Institutions' },
];

const PROGRAMS = [
  { icon: '🏥', title: 'Nursing', desc: 'BSc Nursing, GNM, MSc Nursing' },
  { icon: '💊', title: 'Pharmacy', desc: 'D.Pharm, B.Pharm, Pharm.D' },
  { icon: '🏛️', title: 'Management', desc: 'MBA, BBA, BBA Aviation' },
  { icon: '⚕️', title: 'Allied Health', desc: 'MLT, Radiology, OT Technology' },
  { icon: '⚙️', title: 'Engineering', desc: 'CSE, Mechanical, Civil, AI & DS' },
  { icon: '⚖️', title: 'Law', desc: 'LLB, BA LLB, BBA LLB' },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target.replace(/\D/g, ''));
    const step = num / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  return count;
}

function StatCard({ stat, animate }) {
  const num = parseInt(stat.value.replace(/\D/g, ''));
  const suffix = stat.value.replace(/[0-9]/g, '');
  const count = useCountUp(stat.value, 2000, animate);
  return (
    <div className="stat-card">
      <div className="stat-value">{animate ? `${count}${suffix}` : stat.value}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function Home() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      {/* Hero */}
      <div className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=80&fit=crop"
            alt="Graduates celebrating"
            className="hero__img"
          />
          <div className="hero__overlay" />
        </div>

        <div className="hero__content">
          <div className="hero__text">
            <span className="hero__tag">🎓 Professional Education Guidance</span>
            <h1 className="hero__title">
              Shape Your Future<br />
              <span className="hero__title-accent">Start Here.</span>
            </h1>
            <p className="hero__desc">
              U-Turn Educational Consultancy empowers students across South India to discover 
              the right courses, the right colleges, and the right career paths — with trusted 
              guidance every step of the way.
            </p>
            <div className="hero__actions">
              <button className="btn-primary" onClick={() => handleScroll('contact')}>
                Get Free Counselling
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button className="btn-outline" onClick={() => handleScroll('services')}>
                Explore Programs
              </button>
            </div>
          </div>

          {/* Floating card */}
          <div className="hero__card">
            <div className="hero__card-header">
              <div className="hero__card-dot" />
              <span>Currently Accepting Applications</span>
            </div>
            <div className="hero__card-programs">
              {PROGRAMS.slice(0, 4).map((p, i) => (
                <div key={i} className="hero__card-item">
                  <span className="hero__card-item-icon">{p.icon}</span>
                  <span className="hero__card-item-label">{p.title}</span>
                </div>
              ))}
            </div>
            <button className="hero__card-btn" onClick={() => handleScroll('services')}>
              View All Programs →
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero__stats" ref={statsRef}>
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} animate={statsVisible} />
          ))}
        </div>
      </div>

      {/* Features strip */}
      <div className="features-strip">
        <div className="features-strip__inner">
          {[
            { icon: '✅', text: 'Transparent & Ethical Guidance' },
            { icon: '🎯', text: 'Personalized Counselling' },
            { icon: '🏆', text: 'Carefully Vetted Institutions' },
            { icon: '🌍', text: 'Alumni Working Worldwide' },
          ].map((f, i) => (
            <div key={i} className="features-strip__item">
              <span className="features-strip__icon">{f.icon}</span>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Programs Preview */}
      <div className="programs-preview">
        <div className="programs-preview__inner">
          <div className="programs-preview__header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Programs We <span>Specialize</span> In</h2>
            <div className="gold-line" />
            <p className="section-subtitle">
              From healthcare to technology, we guide you into the program that matches your strengths and ambitions.
            </p>
          </div>

          <div className="programs-grid">
            {PROGRAMS.map((prog, i) => (
              <div key={i} className="program-card" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="program-card__icon">{prog.icon}</div>
                <h3 className="program-card__title">{prog.title}</h3>
                <p className="program-card__desc">{prog.desc}</p>
                <div className="program-card__arrow">→</div>
              </div>
            ))}
          </div>

          <div className="programs-preview__cta">
            <button className="btn-primary" onClick={() => handleScroll('services')}>
              View All Courses & Details
            </button>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="cta-banner__bg">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1400&q=80&fit=crop"
            alt="University campus"
          />
          <div className="cta-banner__overlay" />
        </div>
        <div className="cta-banner__content">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Join over 150,000 students who found their path with U-Turn Educational Consultancy.</p>
          <div className="cta-banner__actions">
            <button className="btn-primary" onClick={() => handleScroll('contact')}>
              Book a Free Session
            </button>
            <a href="tel:+916238323123" className="btn-outline">
              📞 +91 6238 323 123
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

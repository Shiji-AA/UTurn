import React from 'react';
import './AboutUs.css';

const VALUES = [
  {
    icon: '🔍',
    title: 'Transparent Guidance',
    desc: 'Clear, honest, and accurate information about every course, institution, and admission process — no hidden agendas.',
  },
  {
    icon: '🎯',
    title: 'Student-Centric',
    desc: 'Every recommendation is tailored to the individual student\'s academic background, interests, and long-term goals.',
  },
  {
    icon: '🏅',
    title: 'Vetted Institutions',
    desc: 'We rigorously evaluate every partner institution for academic quality, infrastructure, and career outcomes.',
  },
  {
    icon: '🤝',
    title: 'Continuous Support',
    desc: 'Our relationship extends beyond admission — we support students through documentation, joining, and academic transition.',
  },
];

const SECTORS = [
  'Healthcare — Hospitals & Clinics',
  'Pharmaceutical & Life Sciences',
  'Corporate & Business Organizations',
  'Information Technology',
  'Research & Academic Institutions',
  'Hospitality & Tourism Industry',
];

export default function AboutUs() {
  return (
    <div className="about">
      {/* Intro Section */}
      <div className="about__intro">
        <div className="about__intro-inner">
          <div className="about__intro-image">
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=700&q=80&fit=crop"
              alt="Students in counselling session"
            />
            <div className="about__intro-badge">
              <div className="about__intro-badge-num">150K+</div>
              <div className="about__intro-badge-text">Students Guided</div>
            </div>
          </div>

          <div className="about__intro-text">
            <span className="section-tag">About U-Turn</span>
            <h2 className="section-title">
              Empowering Students to<br /><span>Reach Their Potential</span>
            </h2>
            <div className="gold-line" />
            <p className="about__body-text">
              U-Turn Educational Consultancy is a leading professional education guidance organization
              committed to empowering students in realizing their academic ambitions. By facilitating
              admissions to reputed colleges and universities across India, we deliver reliable,
              transparent, and student-centric counselling.
            </p>
            <p className="about__body-text">
              With deep-rooted experience in the education sector, we have successfully guided over
              150,000 students in selecting appropriate programs and institutions for higher education.
              These students have gone on to build distinguished careers in healthcare, pharmaceuticals,
              technology, and corporate organizations across India and internationally.
            </p>

            <div className="about__highlights">
              <div className="about__highlight-item">
                <div className="about__highlight-icon">📍</div>
                <div>
                  <strong>Offices Across South India</strong>
                  <p>Bangalore · Kochi · Trivandrum · Kollam · Coimbatore</p>
                </div>
              </div>
              <div className="about__highlight-item">
                <div className="about__highlight-icon">🎓</div>
                <div>
                  <strong>Career-Oriented Expertise</strong>
                  <p>Specialized in high-demand professional programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="about__values">
        <div className="about__values-inner">
          <div className="about__values-header">
            <span className="section-tag">Our Foundation</span>
            <h2 className="section-title light">What Sets Us <span>Apart</span></h2>
            <div className="gold-line" />
          </div>
          <div className="about__values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="value-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alumni section */}
      <div className="about__alumni">
        <div className="about__alumni-inner">
          <div className="about__alumni-image">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80&fit=crop"
              alt="Medical professionals"
            />
          </div>
          <div className="about__alumni-text">
            <span className="section-tag">Global Success</span>
            <h2 className="section-title">Alumni Working <span>Worldwide</span></h2>
            <div className="gold-line" />
            <p className="about__body-text">
              The achievements of our alumni stand as a testament to the quality and impact of our guidance.
              Graduates of institutions selected through U-Turn counselling are today building successful
              careers across the globe.
            </p>
            <ul className="about__sectors">
              {SECTORS.map((s, i) => (
                <li key={i}>
                  <span className="about__sector-dot">◆</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="about__process">
        <div className="about__process-inner">
          <div className="about__process-header">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Our <span>Admission Process</span></h2>
            <div className="gold-line" />
          </div>
          <div className="about__steps">
            {[
              { num: '01', title: 'Career Counselling', desc: 'Assess your interests, strengths, and academic profile.' },
              { num: '02', title: 'Course Selection', desc: 'Identify the best-fit programs aligned with your goals.' },
              { num: '03', title: 'College Matching', desc: 'Match you to vetted institutions that meet your criteria.' },
              { num: '04', title: 'Admission Guidance', desc: 'Step-by-step support through the entire application process.' },
              { num: '05', title: 'Documentation', desc: 'Full assistance with paperwork and joining formalities.' },
            ].map((step, i) => (
              <div key={i} className="process-step">
                <div className="process-step__num">{step.num}</div>
                <div className="process-step__content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                {i < 4 && <div className="process-step__connector" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

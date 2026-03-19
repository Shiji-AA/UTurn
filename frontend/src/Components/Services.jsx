import React, { useState } from 'react';
import './Services.css';

const CATEGORIES = ['All', 'Healthcare', 'Management', 'Technology', 'Science & Law'];

const SERVICES_DATA = [
  {
    category: 'Healthcare',
    color: '#e74c6f',
    icon: '🏥',
    programs: [
      {
        title: 'Nursing Programs',
        courses: 'BSc Nursing | GNM | Post Basic BSc Nursing | MSc Nursing',
        duration: 'BSc Nursing — 4 Yrs | GNM — 3 Yrs | Post Basic — 2 Yrs | MSc — 2 Yrs',
        eligibility: '12th with Physics, Chemistry & Biology',
        affiliation: 'RGUHS Bangalore | INC | State Nursing Councils',
        icon: '👩‍⚕️',
      },
      {
        title: 'Pharmacy Programs',
        courses: 'D.Pharm | B.Pharm | Pharm.D | M.Pharm',
        duration: 'D.Pharm — 2 Yrs | B.Pharm — 4 Yrs | Pharm.D — 6 Yrs | M.Pharm — 2 Yrs',
        eligibility: '12th with PCB or PCM',
        affiliation: 'RGUHS Bangalore | Pharmacy Council of India (PCI)',
        icon: '💊',
      },
      {
        title: 'Allied Health Science',
        courses: 'BSc MLT | BSc Radiology | BSc OT Technology | BSc Dialysis | BSc Cardiac Care | BSc Anaesthesia',
        duration: '2 to 3 Years',
        eligibility: '10th or 12th standard (course-dependent)',
        affiliation: 'Karnataka Allied & Healthcare Council | Karnataka Paramedical Board',
        icon: '🔬',
      },
      {
        title: 'Diploma Paramedical',
        courses: 'DMLT | Diploma Radiology | X-Ray | OT Tech | Dialysis | Emergency Medical | Blood Bank | Ophthalmic | Dental',
        duration: '1 to 2 Years',
        eligibility: '10th or 12th standard',
        affiliation: 'Karnataka Paramedical Board',
        icon: '🩺',
      },
    ],
  },
  {
    category: 'Management',
    color: '#3b82f6',
    icon: '🏛️',
    programs: [
      {
        title: 'Management Programs',
        courses: 'BBA | BBA Aviation | BBA Logistics & SCM | MBA',
        duration: 'BBA — 3 Yrs | MBA — 2 Yrs',
        eligibility: '12th for BBA | Bachelor\'s degree for MBA',
        affiliation: 'Bangalore University | AICTE | Recognized Universities',
        icon: '📊',
      },
    ],
  },
  {
    category: 'Technology',
    color: '#10b981',
    icon: '⚙️',
    programs: [
      {
        title: 'Engineering Programs',
        courses: 'Computer Science | Mechanical | Civil | Electronics & Communication | Electrical | AI & Data Science',
        duration: 'BTech/BE — 4 Years',
        eligibility: '12th with Physics, Chemistry & Mathematics',
        affiliation: 'Visvesvaraya Technological University (VTU) | AICTE',
        icon: '⚙️',
      },
      {
        title: 'Undergraduate Degree',
        courses: 'BCA | BCA (AI & ML) | BCom | BBA | BBA Aviation | BBA Logistics | BTTM | BSc Forensic Science',
        duration: '3 Years',
        eligibility: '12th standard',
        affiliation: 'Bangalore University | Other State Universities',
        icon: '💻',
      },
    ],
  },
  {
    category: 'Science & Law',
    color: '#8b5cf6',
    icon: '⚖️',
    programs: [
      {
        title: 'Law Programs',
        courses: 'LLB | BA LLB | BBA LLB',
        duration: 'LLB — 3 to 5 Years',
        eligibility: '12th standard / Bachelor\'s degree',
        affiliation: 'Karnataka State Law University (KSLU) | Bar Council of India (BCI)',
        icon: '⚖️',
      },
      {
        title: 'Postgraduate Programs',
        courses: 'MBA | MCom | MTTM',
        duration: '2 Years',
        eligibility: 'Bachelor\'s degree in relevant field',
        affiliation: 'Bangalore University | Other Recognized Universities',
        icon: '🎓',
      },
    ],
  },
];

const OUR_SERVICES = [
  { icon: '🗣️', title: 'Career Counselling', desc: 'Personalized one-on-one sessions to assess interests and guide career direction.' },
  { icon: '🏫', title: 'College Selection', desc: 'Matching students to the right vetted institutions across South India.' },
  { icon: '📝', title: 'Admission Guidance', desc: 'Step-by-step support through the entire college application process.' },
  { icon: '📋', title: 'Documentation Support', desc: 'Complete assistance with all paperwork and joining formalities.' },
  { icon: '💰', title: 'Education Loan Guidance', desc: 'Guidance on accessing education loans and financial aid options.' },
  { icon: '🌐', title: 'Placement Support', desc: 'Career guidance and placement assistance post-graduation.' },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedCard, setExpandedCard] = useState(null);

  const filteredData = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(d => d.category === activeCategory);

  return (
    <div className="services">
      {/* Header */}
      <div className="services__header">
        <div className="services__header-inner">
          <span className="section-tag" style={{ color: 'var(--gold-light)', background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.25)' }}>
            Courses & Programs
          </span>
          <h2 className="section-title light">
            Admission <span>Streams</span> We Cover
          </h2>
          <div className="gold-line" />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)' }}>
            We facilitate admissions to a wide range of undergraduate, postgraduate, professional,
            and diploma programs at reputed institutions across South India.
          </p>

          {/* Filter tabs */}
          <div className="services__tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`services__tab ${activeCategory === cat ? 'services__tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="services__programs">
        <div className="services__programs-inner">
          {filteredData.map((cat, ci) => (
            <div key={ci} className="services__category">
              <div className="services__category-label" style={{ '--cat-color': cat.color }}>
                <span>{cat.icon}</span> {cat.category}
              </div>
              <div className="services__cards">
                {cat.programs.map((prog, pi) => {
                  const cardKey = `${ci}-${pi}`;
                  const isExpanded = expandedCard === cardKey;
                  return (
                    <div
                      key={pi}
                      className={`service-card ${isExpanded ? 'service-card--expanded' : ''}`}
                      style={{ '--cat-color': cat.color }}
                      onClick={() => setExpandedCard(isExpanded ? null : cardKey)}
                    >
                      <div className="service-card__top">
                        <div className="service-card__icon">{prog.icon}</div>
                        <div className="service-card__info">
                          <h3 className="service-card__title">{prog.title}</h3>
                          <p className="service-card__courses">{prog.courses}</p>
                        </div>
                        <div className="service-card__chevron">{isExpanded ? '▲' : '▼'}</div>
                      </div>

                      {isExpanded && (
                        <div className="service-card__details">
                          <div className="service-card__detail-item">
                            <span className="service-card__detail-label">⏱ Duration</span>
                            <span>{prog.duration}</span>
                          </div>
                          <div className="service-card__detail-item">
                            <span className="service-card__detail-label">📋 Eligibility</span>
                            <span>{prog.eligibility}</span>
                          </div>
                          <div className="service-card__detail-item">
                            <span className="service-card__detail-label">🏛 Affiliation</span>
                            <span>{prog.affiliation}</span>
                          </div>
                          <button
                            className="service-card__enquire"
                            onClick={(e) => {
                              e.stopPropagation();
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            Enquire About This Program →
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Services */}
      <div className="our-services">
        <div className="our-services__inner">
          <div className="our-services__header">
            <div className="our-services__left">
              <span className="section-tag">What We Do</span>
              <h2 className="section-title">Our <span>Services</span></h2>
              <div className="gold-line" />
              <p className="section-subtitle">
                Beyond admissions, U-Turn provides end-to-end support to ensure every student 
                starts their higher education journey with confidence.
              </p>
            </div>
            <div className="our-services__image">
              <img
                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80&fit=crop"
                alt="Students counselling"
              />
            </div>
          </div>

          <div className="our-services__grid">
            {OUR_SERVICES.map((s, i) => (
              <div key={i} className="our-service-item">
                <div className="our-service-item__icon">{s.icon}</div>
                <div>
                  <h4 className="our-service-item__title">{s.title}</h4>
                  <p className="our-service-item__desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

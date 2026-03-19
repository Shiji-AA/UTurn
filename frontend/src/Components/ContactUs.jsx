import React, { useState } from 'react';
import './ContactUs.css';

const OFFICES = [
  { city: 'Bangalore', state: 'Karnataka', icon: '🏙️' },
  { city: 'Kochi', state: 'Kerala', icon: '🌴' },
  { city: 'Trivandrum', state: 'Kerala', icon: '🏛️' },
  { city: 'Kollam', state: 'Kerala', icon: '⚓' },
  { city: 'Coimbatore', state: 'Tamil Nadu', icon: '🌆' },
];

const PROGRAMS_LIST = [
  'Nursing Programs',
  'Pharmacy Programs',
  'Allied Health Sciences',
  'Diploma Paramedical',
  'Engineering',
  'Management / MBA',
  'Law Programs',
  'Other',
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', program: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="contact">
      {/* Header */}
      <div className="contact__header">
        <div className="contact__header-inner">
          <span className="section-tag" style={{ color: 'var(--gold-light)', background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.25)' }}>
            Get In Touch
          </span>
          <h2 className="section-title light">
            Start Your Journey <span>Today</span>
          </h2>
          <div className="gold-line" />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Reach out to our team for a free counselling session. We're here to help you 
            find the right path forward.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="contact__body">
        <div className="contact__body-inner">
          {/* Info side */}
          <div className="contact__info">
            <h3 className="contact__info-title">Contact Information</h3>

            <div className="contact__info-items">
              <a href="tel:+916238323123" className="contact__info-item">
                <div className="contact__info-item-icon">📞</div>
                <div>
                  <div className="contact__info-item-label">Phone Numbers</div>
                  <div className="contact__info-item-value">+91 6238 323 123</div>
                  <div className="contact__info-item-value">+91 9946 354 076</div>
                  <div className="contact__info-item-value">+91 9400 058 882</div>
                </div>
              </a>

              <a href="mailto:uturneducationalconsultancy@gmail.com" className="contact__info-item">
                <div className="contact__info-item-icon">✉️</div>
                <div>
                  <div className="contact__info-item-label">Email Address</div>
                  <div className="contact__info-item-value">uturneducationalconsultancy@gmail.com</div>
                </div>
              </a>

              <div className="contact__info-item">
                <div className="contact__info-item-icon">🕐</div>
                <div>
                  <div className="contact__info-item-label">Working Hours</div>
                  <div className="contact__info-item-value">Mon – Sat: 9:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div className="contact__offices">
              <h4 className="contact__offices-title">Our Offices</h4>
              <div className="contact__offices-grid">
                {OFFICES.map((o, i) => (
                  <div key={i} className="contact__office-chip">
                    <span>{o.icon}</span>
                    <div>
                      <div className="contact__office-city">{o.city}</div>
                      <div className="contact__office-state">{o.state}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="contact__info-image">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&fit=crop"
                alt="Education counselling"
              />
            </div>
          </div>

          {/* Form side */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">🎉</div>
                <h3>Thank You!</h3>
                <p>Your enquiry has been received. Our counsellors will reach out to you within 24 hours.</p>
                <button
                  className="btn-primary"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', program: '', message: '' }); }}
                >
                  Submit Another Query
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3 className="contact__form-title">Free Counselling Enquiry</h3>
                <p className="contact__form-sub">Fill in your details and we'll get back to you shortly.</p>

                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="contact__form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="contact__form-group">
                  <label>Program of Interest *</label>
                  <select name="program" value={form.program} onChange={handleChange} required>
                    <option value="">Select a program...</option>
                    {PROGRAMS_LIST.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div className="contact__form-group">
                  <label>Message / Query</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your educational goals, current qualifications, or any questions you have..."
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  className="contact__form-submit btn-primary"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="contact__form-loader" />
                  ) : (
                    <>
                      Submit Enquiry
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

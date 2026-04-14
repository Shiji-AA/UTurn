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

    const message =
`🎓 *New Counselling Enquiry*

👤 *Name:* ${form.name}
📞 *Phone:* ${form.phone}
📧 *Email:* ${form.email || 'Not provided'}
📚 *Program:* ${form.program}
💬 *Message:* ${form.message || 'No message'}`;

    const encoded = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/916238323123?text=${encoded}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappURL, '_blank');
    }, 1000);
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
                <div className="contact__info-item--icon">✉️</div>
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
                <p>Your enquiry has been sent via WhatsApp. Our counsellors will reach out to you within 24 hours.</p>
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
                      Submit
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.124 1.528 5.863L0 24l6.335-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.727.885.924-3.613-.235-.372A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                      </svg>
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

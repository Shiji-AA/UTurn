# U-Turn Educational Consultancy Website

A professional React.js website for U-Turn Educational Consultancy.

## 🎨 Design
- **Color Theme:** Navy Blue (#0d1b3e) + Gold accents (#c9a84c)
- **Fonts:** Cormorant Garamond (display) + Oswald (headings) + DM Sans (body)
- **Fully Responsive:** Mobile, Tablet, Desktop

## 📁 Project Structure
```
src/
├── App.jsx              # Root component + scroll tracking
├── App.css              # Global variables, utilities, base styles
├── index.js             # React DOM entry point
└── Components/
    ├── Navbar.jsx       # Fixed responsive navbar with smooth scroll
    ├── Navbar.css
    ├── Home.jsx         # Hero + stats + programs preview + CTA banner
    ├── Home.css
    ├── AboutUs.jsx      # Company info + values + alumni + process
    ├── AboutUs.css
    ├── Services.jsx     # All courses with filterable cards
    ├── Services.css
    ├── ContactUs.jsx    # Contact form + office locations
    ├── ContactUs.css
    ├── Footer.jsx       # Full footer with logo + links
    └── Footer.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
cd uturn-website
npm install
npm start
```

The app will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 📱 Pages / Sections
1. **Home** — Hero section, stats counter, programs preview, CTA banner
2. **About Us** — Company story, values, alumni success, admission process
3. **Services** — Filterable course catalog (Healthcare, Management, Technology, Law)
4. **Contact** — Enquiry form, office locations, contact details
5. **Footer** — Logo, links, offices, stats

## 🖼️ Images
Images are loaded from Unsplash CDN. To use your own images:
- Replace Unsplash URLs with local paths: `import logo from '../assets/logo.jpeg'`
- Place your logo.jpeg in `src/assets/`

## 📞 Contact Details (from brochure)
- Phone: +91 6238323123 | +91 9946354076 | +91 9400058882
- Email: uturneducationalconsultancy@gmail.com
- Offices: Bangalore, Kochi, Trivandrum, Kollam, Coimbatore

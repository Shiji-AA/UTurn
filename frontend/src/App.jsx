import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><AboutUs /></section>
        <section id="services"><Services /></section>
        <section id="contact"><ContactUs /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

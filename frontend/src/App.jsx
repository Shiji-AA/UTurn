import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Navbar shown on every page */}
      <Navbar />

      <main>
        <Routes>
          {/* Each route renders ONLY that one page */}
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact"  element={<ContactUs />} />
          {/* Unknown URL → go to Home */}
          <Route path="*"         element={<Home />} />
        </Routes>
      </main>

      {/* Footer shown on every page */}
      <Footer />

   
    </Router>
  );
}

export default App;

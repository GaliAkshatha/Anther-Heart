import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

/* COMMON COMPONENTS */
import Navbar from "./components/common/Navbar";
import Hero from "./components/common/Hero";
import FeatureIntro from "./components/common/FeatureIntro";
import LinearCards from "./components/common/LinearCards";
import HighlightCards from "./components/common/HighlightCards";
import Features from "./components/common/Features";   // <-- core feature cards
import InfoGrid from "./components/common/InfoGrid";
import FAQ from "./components/common/FAQ";
import Footer from "./components/common/Footer";
import LoginModal from "./components/common/LoginModal";
import Chatbot from "./components/common/Chatbot";
import WhyUs from "./components/common/WhyUs";


/* DASHBOARDS */
import PatientDashboard from "./components/Patient/PatientDashboard";
import DoctorDashboard from "./components/Doctor/DoctorDashboard";
import HospitalDashboard from "./components/Hospital/HospitalDashboard";

/* STATIC PAGES */
import AboutML from "./pages/AboutML";
import Info from "./pages/Info";
import Resources from "./pages/Resources";
import Help from "./pages/Help";

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [role, setRole] = useState(localStorage.getItem("role") || null);

  const navigate = useNavigate();

  const handleLogin = (r) => {
    localStorage.setItem("role", r);
    setRole(r);
    setLoginOpen(false);
    navigate(`/${r}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onLogin={() => setLoginOpen(true)} role={role} />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero onLogin={() => setLoginOpen(true)} />
              
              {/* Intro Section */}
              <FeatureIntro />

              {/* Linear-style cards */}
              <LinearCards />

              {/* REMOVE HighlightCards (you asked to remove the two boxes) */}
              {/* <HighlightCards /> */}

              {/* RENAME Core Features → Why Anther Heart */}
              

              <WhyUs />  {/* core feature cards restored */}

              {/* Remove InfoGrid section */}
              {/* <InfoGrid /> */}

              {/* FAQ */}
              <main className="max-w-6xl mx-auto px-6 py-20">
                <FAQ />
              </main>

              {/* Footer */}
              <Footer />
            </>
          }
        />

        {/* STATIC PAGES */}
        <Route path="/about-ml" element={<AboutML />} />
        <Route path="/info" element={<Info />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/help" element={<Help />} />

        {/* DASHBOARDS */}
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/hospital" element={<HospitalDashboard />} />
      </Routes>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} onLogin={handleLogin} />
      <Chatbot />
    </div>
  );
}

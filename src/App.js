import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import LanguageSwitcher from "./components/LanguageSwitcher";

// pages
import ProjectAbsensi from "./pages/ProjectAbsensi";
import ProjectCuti from "./pages/ProjectCuti";
import ProjectDigitalArsip from "./pages/ProjectDigitalArsip";
import ProjectInventoryIT from "./pages/ProjectInventoryIT";
import ProjectPOS from "./pages/ProjectPOS";

// HOME PAGE
const Home = () => {
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-x-hidden">
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* PROJECT PAGES */}
        <Route path="/project-absensi" element={<ProjectAbsensi />} />
        <Route path="/project-cuti" element={<ProjectCuti />} />
        <Route
          path="/project-digital-arsip"
          element={<ProjectDigitalArsip />}
        />
        <Route path="/project-inventory-it" element={<ProjectInventoryIT />} />
        <Route path="/project-pos-crossing-river" element={<ProjectPOS />} />
      </Routes>
    </div>
  );
};

export default App;

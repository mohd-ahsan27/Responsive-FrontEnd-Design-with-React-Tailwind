import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import OurTeam from "./Components/Team-Section";
import Services from "./Components/Services-Section";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;


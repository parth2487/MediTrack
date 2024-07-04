import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Testimonial from "./Testimonial.jsx";
import ContactUs from "./ContactUs.jsx";
import ShowCase from "./ShowCase.jsx";
import Features from "./Features.jsx";
import SignIn from "../Forms/SignIn.jsx";
import Pricing from "./Pricing.jsx";
import LandingPage2 from "./LandingPage.jsx";
import Chatbot from "./Chatbot.jsx";
import SignUp from "../Forms/SignUp.jsx";

const LandingPage = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={
          <>
            <LandingPage2 />
            <Features />
            <ShowCase />
            <Testimonial />
            <Pricing />
            <ContactUs />
          </>
        } />
      </Routes>
      <Footer />
      <Chatbot />
    </Router>
  );
};

export default LandingPage;

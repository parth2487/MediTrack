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
import Sidebarx from "../Sidebarx.jsx"
import Sidebary from "../Sidebary.jsx"
import {ProSidebarProvider} from "react-pro-sidebar"
import Profile from "../Doctor/Profile.jsx"
import Profile2 from "../Patient/Profile.jsx"
import Patient from "../Doctor/Patient.jsx"
import Patient2 from "../Patient/Patient.jsx"
import Medicine2 from "../Patient/Medicine.jsx"
import Welcome from "../Doctor/Welcome.jsx"
import Medicine from "../Doctor/Medicine.jsx"
import Getinfo from "../Doctor/Getinfo.jsx"
import Notification from "../Doctor/Notification.jsx"
const LandingPage = () => {
  return (
    <Router>
      <Routes>
      <Route path="/doctor" element={
        <>
        <ProSidebarProvider>
        <Sidebarx/>
        </ProSidebarProvider>
        </>
      } >
       <Route path="Profile" element={<Profile />} />
          <Route path="Patient" element={<Patient />} />
           <Route path="Medicine" element={<Medicine />} />
           <Route path="getinfo/:id" element={<Getinfo />} />
      </Route>
      <Route path="/patient" element={
        <>
        <ProSidebarProvider>
        <Sidebary/>
        </ProSidebarProvider>
        </>
      } >
      <Route path="Profile" element={<Profile2 />} />
          <Route path="Patientinfo" element={<Patient2 />} />
           <Route path="Medicine" element={<Medicine2 />} />
         
      </Route>



        <Route path="/signin" element={
          <>
           <Navbar />
          <SignIn />
          <Footer />
          </>} />
        <Route path="/signup" element={
          <>
          <Navbar />
          <SignUp />
          <Footer />
          </>} />
        <Route path="*" element={
          <>
             <Navbar />
            <LandingPage2 />
            <Features/>
            <ShowCase />
            <Testimonial />
            <Pricing />
            <ContactUs />
            <Footer />
          </>
        } />
           
      </Routes>
    

      <Chatbot />
    </Router>
  );
};

export default LandingPage;

import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/section/Hero";
import Pricing from "./components/section/Pricing";
import Features from "./components/section/Features";
import Testimonial from "./components/section/Testimonial";
import SwapText from "./components/elements/SwapText";
import FAQs from "./components/section/FAQs";
import Contact from "./components/section/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="relative px-32 bg-white font-['neue']">
      <Navbar />
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonial/>
      <FAQs/>
      <Contact/>
    </div>
  );
};

export default App;

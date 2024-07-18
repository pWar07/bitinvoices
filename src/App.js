import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/section/Hero";
import Pricing from "./components/section/Pricing";
import Features from "./components/section/Features";
import Testimonial from "./components/section/Testimonial";
import SwapText from "./components/elements/SwapText";

const App = () => {
  return (
    <div className="relative px-32 bg-white font-['neue']">
      <Navbar />
      {/* <Circle/> */}
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonial/>
    </div>
  );
};

export default App;

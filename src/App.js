import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/section/Hero";
import Pricing from "./components/section/Pricing";
import Circle from "./components/elements/Circle";
import Features from "./components/section/Features";

const App = () => {
  return (
    <div className="relative px-32 bg-white font-['neue']">
      <Navbar />
      {/* <Circle/> */}
      <Hero/>
      <Features/>
      <Pricing/>
    </div>
  );
};

export default App;

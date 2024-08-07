import React from "react";
import Button2 from "../buttons/Button2";
import heroImg from "../../assets/images/bg.png";
import Navbar from "../navbar/Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="hero h-full lg:h-[84vh] w-[100%] flex relative mt-14 md:mt-0 text-zinc-900"
      >
        <div className="hero-content text-center md:text-start h-full flex flex-col justify-around md:justify-center w-full md:w-[60%] gap-12">
          <h1 className="text-5xl md:text-7xl tracking-wide font-['sohne'] font-extrabold">
            Seamless Crypto Payments for Your Business
          </h1>
          <p className="text-base md:text-xl tracking-widest">
            Accept Bitcoin, Ethereum, and other cryptocurrencies easily and
            securely with CryptoPay.
          </p>
          <div className="flex justify-center md:justify-normal">
            <Button2 value="Start Now" />
          </div>
        </div>
        <div className="hero-img w-[40%] hidden md:block">
          <img className="h-5/6 mx-auto object-center" src={heroImg} alt="" />
        </div>
      </section>
    </>
  );
};

export default Hero;

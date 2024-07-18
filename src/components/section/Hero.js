import React from "react";
import Button2 from "../buttons/Button2";
import heroImg from "../../assets/images/bg.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero h-[84vh] w-[100%] flex relative text-zinc-900 "
    >
      <div className="hero-content h-full flex flex-col justify-center w-[60%] gap-12 z-99">
        <h1 className="text-7xl tracking-wide font-['sohne'] font-extrabold">
          Seamless Crypto Payments for Your Business
        </h1>
        <p className="text-xl tracking-widest">
          Accept Bitcoin, Ethereum, and other cryptocurrencies easily and
          securely with CryptoPay.
        </p>
        <Button2 value="Start Now" />
      </div>
      <div className="hero-img w-[40%]">
        <motion.img
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
          className="h-5/6 mx-auto object-center"
          src={heroImg}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

const Footer = () => {
  return (
    <footer className="footer w-full bg-black md:px-32 py-10 text-white flex flex-col items-center text-center justify-between">
      <div className="newsletter mb-5">
        <p className="text-lg md:text-xl mb-3">Subscribe to our newsletter</p>
        <form className="newsletter-form flex justify-center mb-5">
          <input
            type="email"
            placeholder="Your email"
            className="py-2 px-5 outline-none w-1/2 md:w-96 text-black rounded-tl-md rounded-bl-md"
            required
          />
          <button
            type="submit"
            className="bg-[#F6971E] py-2 px-5 rounded-tr-md rounded-br-md"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="md:flex w-full justify-between border-t-[1px] border-gray-600">
        <div className="footer-links flex justify-center md:items-end gap-5 text-center mt-3">
          <a className="text-sm md:text-base" href="#privacy">Privacy Policy</a>
          <a className="text-sm md:text-base" href="#terms">Terms of Service</a>
        </div>
        <div className="mt-3">
          <p className="text-sm md:text-base">Developed by 
            <a href="https://github.com/pWar07" target="_blank"> Pranav Pawar</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

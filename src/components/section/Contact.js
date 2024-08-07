import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact flex flex-col items-center text-zinc-900 py-20"
    >
      <div className="title text-center">
        <h2 className="mb-6 md:mb-14 text-3xl md:text-5xl">Contact Us</h2>
      </div>
      <div className="wrapper block md:flex w-full">
        <div className="contact-info w-full md:w-[55%] md:pl-32 flex flex-col justify-center mb-10 md:mb-0">
          <div className="contWrapper w-full flex flex-col px-4 md:px-10 gap-5 md:gap-7 mb-10">
            <div className="flex items-center gap-5">
              <span className="p-4 bg-[#F6971E] rounded-md text-xl">
                <TfiEmail />
              </span>
              <div className="data">
                <p className="text-lg">Email</p>
                <p className="text-zinc-500">support@cryptopay.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <span className="p-4 bg-[#F6971E] rounded-md text-xl">
                <MdOutlinePhone />
              </span>
              <div className="data">
                <p className="text-lg">Phone</p>
                <p className="text-zinc-500">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <span className="p-4 bg-[#F6971E] rounded-md text-xl">
                <RiHome2Line />
              </span>
              <div className="data">
                <p className="text-lg">Address</p>
                <p className="text-zinc-500">
                  123 Crypto St, Blockchain City, BC 56789
                </p>
              </div>
            </div>
          </div>
          <div className="social-media flex justify-center md:justify-normal md:px-10 gap-10">
            <a href="#" className="text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <form className="contact-form list-none w-full md:w-[45%] md:pr-32">
          <ul className="bg-[#F6971E] p-10 rounded-xl">
            <li>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="border-[1px] border-transparent w-full rounded-md p-3 mb-5 outline-none"
              />
            </li>
            <li>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="border-[1px] border-transparent w-full rounded-md p-3 mb-5 outline-none"
              />
            </li>
            <li>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className="border-[1px] border-transparent w-full rounded-md p-3 mb-5 outline-none"
              ></textarea>
            </li>
            <button
              type="submit"
              className="cta-button w-full bg-black text-white rounded-md p-3"
            >
              Send Message
            </button>
          </ul>
        </form>
      </div>
    </section>
  );
};

export default Contact;

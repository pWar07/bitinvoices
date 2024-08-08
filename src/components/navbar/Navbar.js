import React, { useState } from "react";
import Button1 from "../buttons/Button1";
import logo from "../../assets/images/logo.jpg";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar flex justify-between items-center text-zinc-900 py-9">
        <div className="logo text-2xl">
          <img className="h-7 md:h-8 w-full object-cover" src={logo} alt="Logo" />
        </div>
        <div className="hidden md:block">
          <ul className="nav-links text-lg flex">
            {["Home", "Features", "Pricing", "Testimonials", "FAQ", "Contact"].map((v, i) => (
              <li key={i} className="flex justify-center items-center px-3 py-2 min-w-[100px]">
                <a href={`#${v.toLowerCase()}`}>{v}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <Button1 value="Get Started" />
        </div>
        <button className="md:hidden" onClick={handleMenuClick}>
          {isMenuOpen ? <RxCross1 /> : <CiMenuBurger />}
        </button>
      </nav>
      <div
        className={`${
          isMenuOpen ? 'h-[80vh] py-10' : 'h-0 py-0'
        } transition-all duration-300 overflow-hidden flex flex-col justify-around md:hidden`}
      >
        <ul className="nav-links text-lg flex flex-col">
          {["Home", "Features", "Pricing", "Testimonials", "FAQ", "Contact"].map((v, i) => (
            <li key={i} className="flex justify-center items-center px-3 py-2 min-w-[100px]">
              <a href={`#${v.toLowerCase()}`}>{v}</a>
            </li>
          ))}
        </ul>
        <div>
          <Button1 value="Get Started" />
        </div>
      </div>
    </>
  );
};

export default Navbar;

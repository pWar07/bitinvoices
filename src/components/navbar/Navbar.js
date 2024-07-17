import React from "react";
import Button1 from "../buttons/Button1";
import logo from "../../assets/images/logo.jpg"

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center text-zinc-900 py-9">
      <div className="logo text-2xl">
        <img className="h-8 w-full object-cover" src={logo} alt="" />
      </div>
      <ul className="nav-links text-lg flex">
        {["Home", "Features", "Pricing", "Testimonials", "FAQ", "Contact"].map(
          (v, i) => {
            return (
              <li key={i} className="flex justify-center items-center px-3 py-2 min-w-[100px]">
                <a href="#home">{v}</a>
              </li>
            );
          }
        )}
      </ul>
      <Button1 value="Get Started" />
    </nav>
  );
};

export default Navbar;

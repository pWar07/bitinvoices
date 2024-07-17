import React from "react";

const Button1 = ({ value }) => {
  return (
    <div className="cta-button flex items-center justify-center text-zinc-900 text-lg px-5 py-2 rounded-lg border-[1px] border-gray-900 hover:border-transparent cursor-pointer hover:bg-zinc-900 hover:text-zinc-100 transition-all duration-300 ease-in-out">
      {value}
    </div>
  );
};

export default Button1;

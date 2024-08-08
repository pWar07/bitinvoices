import React from "react";
import { MdDone } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const PRICING = [
  {
    id: 1,
    class: "pricing-plan",
    title: "Basic",
    suitability: "For small businesses",
    price: "$9.99/mo",
    li1: "Up to 100 transactions/month",
    li2: "Email support",
    li3: "Basic analytics",
    button: "Choose Plan",
  },
  {
    id: 2,
    class: "pricing-plan popular",
    title: "Pro",
    suitability: "For growing businesses",
    price: "$29.99/mo",
    li1: "Up to 500 transactions/month",
    li2: "Priority support",
    li3: "Advanced analytics",
    button: "Choose Plan",
  },
  {
    id: 3,
    class: "pricing-plan",
    title: "Enterprise",
    suitability: "For large businesses",
    price: "Contact Us",
    li1: "Unlimited transactions",
    li2: "Dedicated account manager",
    li3: "Custom solutions",
    button: "Contact Us",
  },
];

const Pricing = () => {
  return (
    // ${i % 2 === 0 ? "py-10" : "py-16"}
    <section
      id="pricing"
      className="pricing flex flex-col items-center text-zinc-900 pt-20 md:py-20"
    >
      <div className="title text-center">
        <h2 className="mb-6 md:mb-14 text-3xl md:text-5xl">Pricing Plans</h2>
      </div>
      <div className="pricing-table md:flex items-center gap-10 px-6 md:px-32">
        {PRICING.map((v, i) => {
          return (
            <div
              id={i}
              key={i}
              className={`${v.class} border-[1px] bg-white h-full border-zinc-900 px-8 py-10 mb-5 rounded-xl 
              `}
            >
              {i % 2 === 1 && (
                <h2 className="text-sm text-center mb-3 px-1 rounded-md bg-blue-200 w-fit">
                  Popular
                </h2>
              )}
              <h3 className="text-3xl mb-3">{v.title}</h3>
              <p className="text-zinc-500 mb-3">{v.suitability}</p>
              <div className="price text-2xl">{v.price}</div>
              <ul className="h-32 my-5 flex flex-col justify-around">
                <li className="flex w-full gap-3 items-center">
                  <div className="tick p-[2px] bg-[#F6971E] rounded-full">
                    <MdDone className="text-sm" />
                  </div>
                  {v.li1}
                </li>
                <span className="border-b-[1px]"></span>
                <li className="flex w-full gap-3 items-center">
                  <div className="tick p-[2px] bg-[#F6971E] rounded-full">
                    <MdDone className="text-sm" />
                  </div>
                  {v.li2}
                </li>
                <span className="border-b-[1px]"></span>
                <li className="flex w-full gap-3 items-center">
                  <div className="tick p-[2px] bg-[#F6971E] rounded-full">
                    <MdDone className="text-sm" />
                  </div>
                  {v.li3}
                </li>
              </ul>
              <div className="flex">
                <a
                  href="#signup"
                  className={`cta-button w-full ${
                    i % 2 === 0 ? "bg-black" : "bg-[#F6971E]"
                  } py-1 text-white text-center rounded-lg mt-5`}
                >
                  {v.button}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;

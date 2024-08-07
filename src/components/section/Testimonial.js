import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { RiDoubleQuotesL } from "react-icons/ri";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import prof1 from "../../assets/images/prof1.jpg";
import prof2 from "../../assets/images/prof2.jpg";
import prof3 from "../../assets/images/prof3.jpg";
import prof4 from "../../assets/images/prof4.jpg";
import prof5 from "../../assets/images/prof5.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TESTIMONIALS = [
  {
    img: prof1,
    comment:
      "CryptoPay made it incredibly easy to integrate crypto payments into our store. Our customers love it!",
    name: "John Doe",
    occupation: "CEO, TechStore",
  },
  {
    img: prof2,
    comment:
      "BitInvoices has revolutionized the way I handle crypto transactions for my business. The interface is user-friendly, and the support team is fantastic. Highly recommended!",
    name: "Michael Anderson",
    occupation: "Small Business Owner",
  },
  {
    img: prof3,
    comment:
      "The transaction speeds and security features are top-notch. BitInvoices has made crypto payments seamless and stress-free for us.",
    name: "Jessica Martinez",
    occupation: "Freelance Graphic Designer",
  },
  {
    img: prof4,
    comment:
      "I love how easy it is to manage multiple cryptocurrencies with BitInvoices. The detailed analytics have helped us optimize our payment processes significantly.",
    name: "Sarah Thompson",
    occupation: "Marketing Consultant",
  },
  {
    img: prof5,
    comment:
      "The transaction speeds and security features are top-notch. Highly recommend CryptoPay.",
    name: "John Smith",
    occupation: "Founder, CryptoExchange",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials text-zinc-900 pt-20 md:py-20">
      <div className="title text-center">
        <h2 className="mb-6 md:mb-14 text-3xl md:text-5xl">What Our Clients Say</h2>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {TESTIMONIALS.map((v, i) => {
          return (
            <SwiperSlide className="relative py-10 flex flex-col items-center justify-center">
              <div className="top flex flex-col justify-center items-center">
                <img
                  src={v.img}
                  alt=""
                  className="h-14 w-14 rounded-full mb-7 object-cover object-center"
                />
                <RiDoubleQuotesL className="text-9xl -z-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[7%]" />
                <p className="text-xl text-center mb-5">"{v.comment}"</p>
              </div>
              <div className="bottom flex flex-col justify-center items-center">
                <h4 className="name text-lg font-bold">{v.name}</h4>
                <span className="occupation text-zinc-500">{v.occupation}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;

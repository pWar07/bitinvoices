import React from "react";

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonials flex flex-col items-center text-zinc-900 py-20">
      <h2 className="mb-14 text-5xl">What Our Clients Say</h2>
      <div className="testimonial-slider">
        <div className="testimonial-item">
          <img src="client1.jpg" alt="Client 1" />
          <p>
            "CryptoPay made it incredibly easy to integrate crypto payments into
            our store. Our customers love it!"
          </p>
          <h4>Jane Doe</h4>
          <span>CEO, TechStore</span>
        </div>
        <div className="testimonial-item">
          <img src="client2.jpg" alt="Client 2" />
          <p>
            "The transaction speeds and security features are top-notch. Highly
            recommend CryptoPay."
          </p>
          <h4>John Smith</h4>
          <span>Founder, CryptoExchange</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

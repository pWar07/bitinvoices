import React from "react";
import bg from "../../assets/images/ethereum-removebg.png";
import feat1 from "../../assets/images/money-transfer.png"
import feat2 from "../../assets/images/secure.png"
import feat3 from "../../assets/images/global-networking.png"
import feat4 from "../../assets/images/pencil.png"

const Features = () => {
  return (
    <section
      id="features"
      className="features flex flex-col items-center text-zinc-900 py-20"
    >
      <h2 className="mb-14 text-5xl">Key Features</h2>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="feature-list w-full py-5 px-36 bg-contain bg-no-repeat bg-center flex justify-between"
      >
        <div className="row flex flex-col justify-between items-start ">
          <div className="feature-item bg-zinc-100 p-8 w-1/2 min-h-56 mb-6 rounded-xl">
            <img src={feat1} className="h-10 mb-3" alt="Feature 1" />
            <h3 className="text-xl font-semibold mb-1">Fast Transactions</h3>
            <p>Process payments quickly with minimal delays.</p>
          </div>
          <div className="feature-item bg-zinc-100 p-8 w-1/2 min-h-56 rounded-xl">
            <img src={feat2} className="h-10 mb-3" alt="Feature 2" />
            <h3 className="text-xl font-semibold mb-1">Secure Wallets</h3>
            <p>
              Keep your funds safe with our industry-leading security measures.
            </p>
          </div>
        </div>
        <div className="row flex flex-col justify-between items-end ">
          <div className="feature-item bg-zinc-100 p-8 w-1/2 min-h-56 mb-6 rounded-xl">
            <img src={feat3} className="h-10 mb-3" alt="Feature 3" />
            <h3 className="text-xl font-semibold mb-1">Global Reach</h3>
            <p>Accept payments from customers all around the world.</p>
          </div>
          <div className="feature-item bg-zinc-100 p-8 w-1/2 min-h-56 rounded-xl">
            <img src={feat4} className="h-10 mb-3" alt="Feature 4" />
            <h3 className="text-xl font-semibold mb-1">Modern Design</h3>
            <p>Seamlessly monitor and analyze essential business metrics with ease.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

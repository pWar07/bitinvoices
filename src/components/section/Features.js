import React from "react";

const Features = () => {
  return (
    <section id="features" className="features  flex flex-col items-center text-zinc-900 py-20">
      <h2 className="mb-14 text-5xl">Key Features</h2>
      <div className="feature-list flex">
        <div className="feature-item">
          <img src="feature-icon1.png" alt="Feature 1" />
          <h3>Fast Transactions</h3>
          <p>Process payments quickly with minimal delays.</p>
        </div>
        <div className="feature-item">
          <img src="feature-icon2.png" alt="Feature 2" />
          <h3>Secure Wallets</h3>
          <p>
            Keep your funds safe with our industry-leading security measures.
          </p>
        </div>
        <div className="feature-item">
          <img src="feature-icon3.png" alt="Feature 3" />
          <h3>Global Reach</h3>
          <p>Accept payments from customers all around the world.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

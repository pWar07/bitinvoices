import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const DATA = [
  {
    question: "How do I sign up?",
    answer:
      "You can sign up by clicking the 'Get Started' button and filling out the registration form.",
  },
  {
    question: "Which cryptocurrencies are supported?",
    answer:
      "We support Bitcoin, Ethereum, Litecoin, and many more. Check our features section for the full list.",
  },
  {
    question: "How secure is CryptoPay?",
    answer:
      "We use industry-leading security measures to ensure your funds are always safe.",
  },
];

const FAQs = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className="faq flex flex-col items-center text-zinc-900 py-20">
      <h2 className="mb-14 text-5xl">Frequently Asked Questions</h2>
      <div className="wrapper px-40 flex w-full justify-center items-center">
        <div className="accordion w-full">
          {DATA.map((v, i) => {
            return (
              <div className="item border-b-[1px] end mb-5 px-[20px] py-3 last:border-none">
                <div
                  className="title flex justify-between items-center mb-3 cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <h2 className="text-xl">{v.question}</h2>
                  <span className="text-2xl">
                    {selected === i ? <CiCircleMinus /> : <CiCirclePlus />}
                  </span>
                </div>
                <div
                  className={`content text-lg grid overflow-hidden transition-all duration-300 ease-in-out ${
                    selected === i
                      ? "grid-rows-[1fr] opacity-100 h-auto"
                      : "grid-rows-[0fr] opacity-0 h-0"
                  }`}
                >
                  <div className="overflow-hidden text-base">{v.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

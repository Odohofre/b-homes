import { useState } from "react";
import arrowup from "../assets/arrow-up.svg";
import arrowdown from "../assets/arrow-circle-down.svg";
import shield from '../assets/shield-cross.svg'
import { v4 as uuidv4 } from "uuid";

function Accordion({ question, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="p-5 border border-dark-100 space-y-8 rounded-default mb-4">
      <button className="flex w-full justify-between items-center" onClick={toggleAccordion}>
        <div className="p-2 bg-dark-100 rounded-full">
          <img src={shield} alt="" />
        </div>
        
        <span className="text-[#415B86] text-xl font-semibold leading-[1.2]">{question}</span>
        <div className="p-2 bg-dark-100 rounded-full">
          <img src={isOpen ? arrowup : arrowdown} alt="" className="w-6 h-6" />
        </div>
        
      </button>
      {isOpen && <div className="px-5 font-medium text-dark-50">{children}</div>}
    </div>
  );
}

const faqs = [
  {
    question: "Best Interest rates in the market",
    answer: "We are always ready to help by providing the best interest rates in the market",
  },
  {
    question: "What is Tailwind?",
    answer:
      "Tailwind is a CSS framework that provides utility classes for styling web applications.",
  },
];

function FAQ() {
  return (
    <div className="max-w-lg mx-auto">
      {faqs.map((faq) => (
        <Accordion key={uuidv4()} question={faq.question}>
          {faq.answer}
        </Accordion>
      ))}
    </div>
  );
}

export default FAQ;

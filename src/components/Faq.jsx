import {useState, useMemo, memo } from "react";
import arrowup from "../assets/arrow-up.svg";
import arrowdown from "../assets/arrow-circle-down.svg";
import shield from "../assets/shield-cross.svg";
import { v4 as uuidv4 } from "uuid";

function Accordion({ question, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="p-5 border border-dark-100 space-y-8 rounded-default mb-4">
      <button
        className="flex w-full justify-between space-x-4 items-center"
        onClick={toggleAccordion}
      >
        <div className="p-2 bg-dark-100 rounded-full">
          <img src={shield} alt="" />
        </div>

        <span className="text-[#415B86] text-xl font-semibold leading-[1.2]">
          {question}
        </span>
        <div className="p-2 bg-dark-100 rounded-full">
          <img src={isOpen ? arrowup : arrowdown} alt="" className="w-6 h-6" />
        </div>
      </button>
      {isOpen && (
        <div className="px-2 font-medium text-dark-50">{children}</div>
      )}
    </div>
  );
}

const MemoizedAccordion = memo(Accordion);

export default function Faq({ faqs }) {
  const [uuids] = useState(() => {
    return faqs.map(() => uuidv4());
  });

  const memoizedFaqs = useMemo(() => {
    return faqs.map((faq, index) => {
      return {
        id: uuids[index],
        question: faq.question,
        answer: faq.answer,
      };
    });
  }, [faqs, uuids]);

  return (
    <div className="max-w-lg mx-auto">
      {memoizedFaqs.map(({id, question, answer}) => (
        <MemoizedAccordion key={id} question={question}>
          {answer}
        </MemoizedAccordion>
      ))}
    </div>
  );
}

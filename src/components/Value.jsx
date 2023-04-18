import Faq from "./Faq";
import SectionHead from "./SectionHead";
import SectionSubhead from "./SectionSubhead";
import services from "../assets/services-images.png";

const features = [
  {
    question: "Best Interest rates in the market",
    answer:
      "We are always ready to help by providing the best interest rates in the market",
  },
  {
    question: "Prevent unstable prices",
    answer:
      "We maintain stable pricing for predictability and reliability for customers.",
  },
  {
    question: "Best price on the internet",
    answer:
      "We offer the most competitive prices for high-quality products and services.",
  },
  {
    question: "Security for your data",
    answer:
      "Advanced security measures protect sensitive information, ensuring data is safe and secure.",
  },
];

export default function Value() {
  return (
    <section className="flex flex-col lg:flex-row mt-20 mb-2.5 pt-3 px-5 gap-16 lg:px-28">
      <article>
        <SectionHead heading="our value" />
        <SectionSubhead content="Value We Give to You" />
        <p className="max-w-sm text-dark-50 pr-4 mt-5 mb-0.5">
          We are always ready to help by providing the best service for you. We
          believe a good place to live can make your life better.
        </p>
        <Faq faqs={features} />
      </article>
      <div>
        <div className="bg-[#D9D9D9]/20 rounded-t-[400px] hidden lg:block lg:h-[625px] pt-7 pb-14 px-5">
          <img src={services} alt="" height={627} />
        </div>
      </div>
    </section>
  );
}

import joeCharles from "../assets/joe-charles.png";
import bellaCruis from "../assets/Bella-Cruis.png";

function Card({ name, title, content, href }) {
  return (
    <div className="flex flex-col md:flex-row max-w-xs md:max-w-xl items-center rounded-default">
      <img
        src={href}
        className="object-cover  lg:h-auto"
        width={285}
        alt={name}
      />
      <div className="px-6 md:px-0 md:pl-6">
        <p className="text-dark-400 mt-4 md:0">{content}</p>
        <div className="flex space-x-1.5 md:flex-col">
          <h1 className="text-2xl md:text-3xl font-medium md:mt-7">{name}</h1>
          <h2 className="text-sm md:text-lg md:mt-1 text-dark-400">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="flex flex-col justify-center px-5 bg-dark-800 text-white py-10 space-y-14 lg:py-24 lg:px-30">
      <div className="space-y-3 font-medium">
        <span className="uppercase border-l-3 pl-3">Testimonials</span>
        <h1 className="text-[40px] leading-[48px] lg:max-w-md font-medium">
          What our Customers Say About Us
        </h1>
      </div>
      <div className="flex flex-col items-center space-y-12 xl:space-y-0 xl:space-x-6 xl:flex-row">
        <Card
          name="Joe Charles"
          title="Lead Designer"
          content="We are very impressed with the 
      real estate values and paying method in particular, we did not want open inspection or sales by auction."
          href={joeCharles}
        />
        <Card
          name="Bella Cruis"
          title="Brand Designer"
          content="We are very impressed with the 
      real estate values and paying method in particular, we did not want open inspection or sales by auction."
          href={bellaCruis}
        />
      </div>
    </section>
  );
}

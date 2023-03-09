import joeCharles from "../assets/joe-charles.png";
import bellaCruis from "../assets/Bella-Cruis.png";

function Card({ name, title, content, href }) {
  return (
    <div className="flex lg:max-w-xl items-center rounded-default">
      <img src={href} className="object-cover w- lg:h-auto" alt={name} />
      <div className="px-6 lg:pl-6">
        <p className="text-dark-400">{content}</p>
        <h1 className="text-3xl font-medium mt-7">{name}</h1>
        <h2 className="text-lg mt-1 text-dark-400">{title}</h2>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="flex flex-col justify-center px-5 bg-dark-800 text-white py-10 space-y-14 lg:py-24 lg:px-32">
      <div className="space-y-3 font-medium">
        <span className="uppercase border-l-3 pl-3">Testimonials</span>
        <h1 className="text-[40px] leading-[48px] lg:max-w-md font-medium">
          What our Customers Say About Us
        </h1>
      </div>
      <div className="flex flex-col space-y-8 lg:space-x-6 lg:flex-row">
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

import serviceImage from "../assets/services-images.png";
import PrimaryButton from "./PrimaryButton";
import SectionHead from "./SectionHead";
import SectionSubhead from "./SectionSubhead";

export default function Services() {
  return (
    <section id="services" className="flex flex-col lg:flex-row mt-20 m:max-w-5xl pt-3 px-5 lg:px-28">
      <div className="bg-[#D9D9D9]/20 rounded-t-[400px] hidden lg:block lg:h-[625px] pt-7 px-5"><img width={600} className="object-fit" src={serviceImage} /></div>
      
      <div className="lg:py-24 lg:pl-30 pr-5">
        <SectionHead heading="our services" />
        <SectionSubhead change={true} variant="text-5xl max-w-sm mt-3" content="Comfort is our Top Priority for you" />
        <p className="max-w-sm text-dark-50 pr-4 mt-5 mb-0.5">
          We are always ready to help by providing the best service for you. We
          believe a good place to live can make your life better.
        </p>
        <ul className="my-8 space-y-5 text-[#415B86] text-xl leading-[1.2]">
          <li className="flex items-center">
            <div className="flex items-center bg-dark-100 rounded-full p-[3px] mr-4">
              <span className="inline-block bg-sky-blue w-2 h-2 rounded-full"></span>
            </div>{" "}
            Premium national mandate
          </li>
          <li className="flex items-center">
            <div className="flex items-center bg-dark-100 rounded-full p-[3px] mr-4">
              <span className="inline-block bg-sky-blue w-2 h-2 rounded-full"></span>
            </div>{" "}
            Managed viewings
          </li>
          <li className="flex items-center">
            <div className="flex items-center bg-dark-100 rounded-full p-[3px] mr-4">
              <span className="inline-block bg-sky-blue w-2 h-2 rounded-full"></span>
            </div>{" "}
            Free, no obligation valuations
          </li>
          <li className="flex items-center">
            <div className="flex items-center bg-dark-100 rounded-full p-[3px] mr-4">
              <span className="inline-block bg-sky-blue w-2 h-2 rounded-full"></span>
            </div>{" "}
            Local area knowledge
          </li>
        </ul>
        <PrimaryButton text="See more" />
      </div>
    </section>
  );
}

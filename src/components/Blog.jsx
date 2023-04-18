import Button from "./Button";
import PrimaryButton from "./PrimaryButton";
import SectionHead from "./SectionHead";
import SectionSubhead from "./SectionSubhead";
import ImageCard from "./ImageCard";
import crooksGarden from "../assets/crooksgarden.png";
import gatacit from "../assets/gaticit-homes.png";
import gregor from "../assets/gregor-haven.png";

function BlogCard({ href }) {
  return (
    <ImageCard href={href}>
      <div className="flex flex-col items-start text-dark-700">
        <p className="flex items-center font-medium border-b border-dark-50/20 p-2.5">
          <span className="inline-block w-2 h-2 bg-sky-blue rounded-full mr-2"></span>{" "}
          21 January 2021
        </p>
        <p className="mt-4 mb-8">
          Home sales about to surge? we may see a summer like never before
        </p>
        <Button
          content="Read More"
          change={true}
          variant="bg-dark-100 text-royal-blue hover:bg-royal-blue hover:text-white px-10 py-5"
        />
      </div>
    </ImageCard>
  );
}

export default function Blog() {
  return (
    <section id="about" className="mt-20 mb-14 mx-5 lg:mx-0 lg:px-30">
      <SectionHead heading="our Blog" />
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 justify-between items-start mt-3">
        <SectionSubhead
          content="Latest housing Information"
          change={true}
          variant="lg:w-[334px] text-5xl"
        />
        <p className="max-w-sm text-dark-50">
          We are always ready to help by providing the best service for you. We
          believe a good place to live can make your life better and
          outstanding.
        </p>
        <PrimaryButton text="See More" change={true} variant="" />
      </div>
      <div className="mt-6 flex flex-col lg:flex-row flex-wrap items-center gap-5 justify-between space-y-8 lg:space-y-0 ">
        <BlogCard href={crooksGarden} />
        <BlogCard href={gatacit} />
        <BlogCard href={gregor} />
      </div>
    </section>
  );
}

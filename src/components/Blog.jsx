import Button from "./Button";
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
          variant="bg-dark-100 text-royal-blue hover:bg-royal-blue hover:text-dark-100 px-10 py-5"
        />
      </div>
    </ImageCard>
  );
}

export default function Blog() {
  return (
    <section className="my-14 mx-5 lg:mx-0 lg:px-30">
      <SectionHead heading="our Blog" />
      <div className="flex flex-col justify-between items-start md:flex-row mt-3">
        <SectionSubhead
          content="Latest housing Information"
          change={true}
          variant="lg:w-[334px] text-5xl"
        />
        <p className="lg:w-[488px] text-dark-50">
          We are always ready to help by providing the best service for you. We
          believe a good place to live can make your life better and
          outstanding.
        </p>
        <Button content="See More" variant="px-12 py-5" />
      </div>
      <div className="mt-6 flex flex-col justify-between space-y-8 lg:space-y-0 lg:flex-row">
        <BlogCard href={crooksGarden} />
        <BlogCard href={gatacit} />
        <BlogCard href={gregor} />
      </div>
    </section>
  );
}

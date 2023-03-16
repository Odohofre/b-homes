import ImageCard from "./ImageCard";
import SectionHead from "./SectionHead";
import SectionSubhead from "./SectionSubhead";
import crooksGarden from "../assets/crooksgarden.png";
import gatacit from "../assets/gaticit-homes.png";
import gregor from "../assets/gregor-haven.png";
import Button from "./Button";

function Card({ name, amount, href }) {
  return (
    <ImageCard href={href}>
      <div className="flex flex-col justify-center space-y-4 font-semibold">
        <span className="text-dark-50 flex items-center">
          <svg
            className="inline mr-2"
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 10C8.55 10 9.021 9.804 9.413 9.412C9.805 9.02 10.0007 8.54933 10 8C10 7.45 9.804 6.979 9.412 6.587C9.02 6.195 8.54933 5.99933 8 6C7.45 6 6.979 6.196 6.587 6.588C6.195 6.98 5.99933 7.45067 6 8C6 8.55 6.196 9.021 6.588 9.413C6.98 9.805 7.45067 10.0007 8 10ZM8 19.625C7.86667 19.625 7.73333 19.6 7.6 19.55C7.46667 19.5 7.35 19.4333 7.25 19.35C4.81667 17.2 3 15.204 1.8 13.362C0.6 11.52 0 9.79933 0 8.2C0 5.7 0.804333 3.70833 2.413 2.225C4.02167 0.741667 5.884 0 8 0C10.1167 0 11.9793 0.741667 13.588 2.225C15.1967 3.70833 16.0007 5.7 16 8.2C16 9.8 15.4 11.521 14.2 13.363C13 15.205 11.1833 17.2007 8.75 19.35C8.65 19.4333 8.53333 19.5 8.4 19.55C8.26667 19.6 8.13333 19.625 8 19.625Z"
              fill="#1E1E1E"
            />
          </svg>
          Jakarta Barat, Lagos
        </span>
        <h3 className=" text-2xl text-[#415B86] leading-[30px]">{name}</h3>
        <div className="flex items-center space-x-3 text-dark-150 font-normal">
          <span className="flex items-center mb-4">
            <svg
              className="inline mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 10V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V10C4.46957 10 3.96086 10.2107 3.58579 10.5858C3.21071 10.9609 3 11.4696 3 12V17H4.33L5 19H6L6.67 17H17.33L18 19H19L19.67 17H21V12C21 11.4696 20.7893 10.9609 20.4142 10.5858C20.0391 10.2107 19.5304 10 19 10ZM7 7H17V10H7M19 15H5V12H19V15Z"
                fill="#6C6C6C"
              />
            </svg>
            4 bed
          </span>
          <span className="flex items-center mb-4">
            <svg
              className="inline mr-2"
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M11.3957 7.72107V12.2794H6.83743V7.72107H11.3957Z"
                fill="#6C6C6C"
              />
              <path
                d="M14.8118 3.16272H3.41608C3.11384 3.16272 2.82399 3.28278 2.61028 3.49649C2.39657 3.7102 2.2765 4.00006 2.2765 4.30229V15.698C2.2765 16.0002 2.39657 16.2901 2.61028 16.5038C2.82399 16.7175 3.11384 16.8376 3.41608 16.8376H14.8118C15.114 16.8376 15.4039 16.7175 15.6176 16.5038C15.8313 16.2901 15.9514 16.0002 15.9514 15.698V4.30229C15.9514 4.00006 15.8313 3.7102 15.6176 3.49649C15.4039 3.28278 15.114 3.16272 14.8118 3.16272ZM14.8118 15.698H3.41608V4.30229H14.8118V15.698ZM11.3931 7.15122H6.83479C6.68367 7.15122 6.53874 7.21125 6.43189 7.3181C6.32503 7.42496 6.265 7.56989 6.265 7.721V12.2793C6.265 12.4304 6.32503 12.5753 6.43189 12.6822C6.53874 12.789 6.68367 12.8491 6.83479 12.8491H11.3931C11.5442 12.8491 11.6891 12.789 11.796 12.6822C11.9028 12.5753 11.9629 12.4304 11.9629 12.2793V7.721C11.9629 7.56989 11.9028 7.42496 11.796 7.3181C11.6891 7.21125 11.5442 7.15122 11.3931 7.15122ZM10.8233 11.7095H7.40457V8.29079H10.8233V11.7095Z"
                fill="#6C6C6C"
              />
            </svg>
            10x10m
          </span>
        </div>
        <div className="flex w-full space-x-5 items-center">
          <Button
            content="BOOK NOW"
            variant="px-10 py-4 text-white bg-royal-blue hover:text-white hover:bg-sky-blue"
          />
          <span className="font-bold text-[22px] leading-7 text-royal-blue">{`$${amount}`}</span>
        </div>
      </div>
    </ImageCard>
  );
}

export default function Popular() {
  return (
    <section id="product" className="relative px-5 lg:h-[675px] lg:px-0 mt-14">
      <div className="w-full hidden lg:block h-1/3"></div>
      <div className="w-full hidden lg:block h-2/3 bg-dark-800"></div>
      <div className="w-full space-y-3 lg:px-30 lg:absolute lg:top-0 lg:left-0">
        
      <SectionHead heading="popular" />
      <div className="mt-3 flex flex-col md:justify-between md:flex-row md:items-center">
        <SectionSubhead
          content="Our Popular Residence"
          change={true}
          variant="text-3xl md:text-[32px]"
        />
        <button
          type="button"
          className="inline-flex md:justify-between items-center text-dark-700 font-medium"
        >
          Explore All{" "}
          <svg
            className="ml-1 md:ml-2.5"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2 15.3L15.8 12.7C16 12.5 16.1 12.2667 16.1 12C16.1 11.7333 16 11.5 15.8 11.3L13.175 8.675C12.9917 8.49167 12.7623 8.40433 12.487 8.413C12.2117 8.42167 11.9827 8.51733 11.8 8.7C11.6167 8.88334 11.525 9.11667 11.525 9.4C11.525 9.68333 11.6167 9.91667 11.8 10.1L12.7 11H9.475C9.19167 11 8.95833 11.096 8.775 11.288C8.59167 11.48 8.5 11.7173 8.5 12C8.5 12.2833 8.596 12.521 8.788 12.713C8.98 12.905 9.21733 13.0007 9.5 13H12.7L11.775 13.925C11.5917 14.1083 11.504 14.3377 11.512 14.613C11.52 14.8883 11.616 15.1173 11.8 15.3C11.9833 15.4833 12.2167 15.575 12.5 15.575C12.7833 15.575 13.0167 15.4833 13.2 15.3ZM12.5 22C11.1167 22 9.81667 21.7373 8.6 21.212C7.38333 20.6867 6.325 19.9743 5.425 19.075C4.525 18.175 3.81267 17.1167 3.288 15.9C2.76333 14.6833 2.50067 13.3833 2.5 12C2.5 10.6167 2.76267 9.31667 3.288 8.1C3.81333 6.88333 4.52567 5.825 5.425 4.925C6.325 4.025 7.38333 3.31233 8.6 2.787C9.81667 2.26167 11.1167 1.99933 12.5 2C13.8833 2 15.1833 2.26267 16.4 2.788C17.6167 3.31333 18.675 4.02567 19.575 4.925C20.475 5.825 21.1877 6.88333 21.713 8.1C22.2383 9.31667 22.5007 10.6167 22.5 12C22.5 13.3833 22.2373 14.6833 21.712 15.9C21.1867 17.1167 20.4743 18.175 19.575 19.075C18.675 19.975 17.6167 20.6877 16.4 21.213C15.1833 21.7383 13.8833 22.0007 12.5 22ZM12.5 20C14.7167 20 16.6043 19.221 18.163 17.663C19.7217 16.105 20.5007 14.2173 20.5 12C20.5 9.78333 19.721 7.89567 18.163 6.337C16.605 4.77834 14.7173 3.99933 12.5 4C10.2833 4 8.39567 4.779 6.837 6.337C5.27833 7.895 4.49933 9.78267 4.5 12C4.5 14.2167 5.279 16.1043 6.837 17.663C8.395 19.2217 10.2827 20.0007 12.5 20Z"
              fill="#1E1E1E"
            />
          </svg>
        </button>
      </div>

      <div className="mt-6 flex flex-col space-y-8 lg:space-y-0 lg:flex-row flex-wrap items-center gap-5 lg:justify-between">
        <Card
          href={crooksGarden}
          name="Crooks Garden City"
          amount="5,200,000"
        />
        <Card href={gatacit} name="Gaticit Homes" amount="3,400,000" />
        <Card href={gregor} name="Gregor haven's City" amount="8,800,000" />
      </div>
      </div>
    </section>
  );
}

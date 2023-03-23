import intro from "../assets/intro.png";
import purpleCircle from "../assets/purple-circle.png";
import profile from "../assets/profile.svg";
import notepad from "../assets/notepad.svg";
import award from "../assets/award.svg";
import SearchButton from "./SearchButton";

function Display({ img, number, content }) {
  return (
    <div className="font-medium">
      <img src={img} height="" alt="" className="grow-0 mb-0.5" />
      <h3 className="text-[32px] mt-4 leading-5 text-white">
        <span className="text-[#EA731D]">{number}</span>+
      </h3>
      <p className="text-dark-400 mt-1 text-lg lg:text-xl leading-[1.2]">
        {content}
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="px-5 flex flex-col lg:flex-row pt-8 lg:pt-16 lg:pb-9 mb-2 bg-dark-800 lg:px-30">
      <div className="lg:h-[625px] bg-[#d9d9d9]/20 lg:px-5 lg:pt-[1.125rem] rounded-t-[400px]  backdrop-blur-[50px] shrink-0 grow-0">
        <img
          src={intro}
          width={600}
          height={645}
          alt=""
          className="object-cover shadow-img rounded-t-[400px] rounded-b-[20px]"
        />
      </div>
      <article className="max-w-xl flex flex-col justify-center lg:ml-1 grow-0 lg:pl-24">
        <div className="relative z-20">
          <img
            src={purpleCircle}
            width={55}
            className="-z-10 absolute right-20 top-10 lg:left-48 lg:-top-5"
            alt=""
          />
          <h1 className="uppercase text-white text-4xl lg:text-5xl font-semibold mb-1">
            Discover <br /> the most suitable property today
          </h1>
        </div>

        <h2 className="text-dark-400 mt-8 mb-1">
          Find a variety of properties that suit you very easily, forget the
          difficulties in finding a residence for yourself.
        </h2>
        <SearchButton />
        <div className="flex mt-14 space-x-10">
          <Display img={profile} number="78" content="Our Customers" />
          <Display img={notepad} number="105" content="Premium Product" />
          <Display img={award} number="32" content="Awards Won" />
        </div>
      </article>
    </section>
  );
}

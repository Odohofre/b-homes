import NavBar from "./NavBar";
import intro from "../assets/intro.png";

export default function Hero() {
  return (
    <section className="bg-dark-brown">
     
      <div className="flex">
        <div>
          <img src={intro} width={600} alt="" className="" />
        </div>
        <article>hello world</article>
      </div>
    </section>
  );
}

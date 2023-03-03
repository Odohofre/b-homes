import America from "../assets/american tower.svg";
import Prologis from "../assets/Prologis_logo.svg";
import Equinix from "../assets/Equinix-logo.svg";
import Digital from "../assets/Digital_Realty_log.svg";

export default function Company() {
  return (
    <section className="px-30 md:h-30 mt-20">
      <ul className="flex flex-col md:flex-row justify-center items-center space-y-16 md:space-y-0 md:space-x-40">
        <li>
          <img src={Prologis} alt="Prologis Logo" />
        </li>
        <li>
          <img src={America} alt="American Tower Logo" />
        </li>
        <li>
          <img src={Equinix} alt="Equinix Logo" />
        </li>
        <li>
          <img src={Digital} alt="Digital Realty Logo" />
        </li>
      </ul>
    </section>
  );
}

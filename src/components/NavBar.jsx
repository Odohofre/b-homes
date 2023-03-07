import { useState } from "react";
import Button from "./Button";

const links = [
  { id: "services", text: "services" },
  { id: "product", text: "product" },
  { id: "about", text: "about us" },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  function handleClick(sectionId) {
    setActiveSection(sectionId);
  }

  return (
    <header className="sticky top-0 z-50  bg-dark-800 text-white pt-8 pb-6">
      <nav className="flex w-full items-center justify-between font-bold lg:px-30 uppercase">
        {/* Logo */}
        <div className="">
          <a
            href="#"
            className="flex items-center text-3xl leading-10 flex-grow-0"
          >
            b
            <span className="inline-block w-4 h-4 rounded-full bg-[#d9d9d9] mx-[6px]"></span>
            homes
          </a>
        </div>

        {/* DESKTOP NAV */}
        <div className="flex items-center justify-between">
          <div className="text-sm space-x-24">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`py-2 hover:border-b-3 hover:border-white/70 ${
                  activeSection === link.id ? "border-b-3 border-white" : ""
                } `}
                onClick={() => handleClick(`${link.id}`)}
              >
                {link.text}
              </a>
            ))}

            {/* Call to Action */}
            <Button content="Contact Us" change={true} variant="py-2.5 px-5 bg-royal-blue text-white hover:bg-white hover:font-medium hover:text-royal-blue" />
          </div>
        </div>
      </nav>
    </header>
  );
}

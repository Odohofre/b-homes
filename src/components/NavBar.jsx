import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import open from "../assets/icon-menu.svg";
import close from "../assets/icon-menu-close.svg";

const links = [
  { id: "services", text: "services" },
  { id: "product", text: "product" },
  { id: "about", text: "about us" },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef();

  function handleClick(sectionId) {
    setActiveSection(sectionId);
  }

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      handleLinkClick();
    }
  };

  useEffect(() => {
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50  bg-dark-800 text-white pt-8 pb-6">
      <nav className="flex md:w-full items-center justify-between font-bold px-5 lg:px-24 xl:px-30 uppercase">
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
        <div className="hidden md:flex md:items-center md:justify-between ">
          <div className="text-sm md:space-x-4 lg:space-x-16 xl:space-x-24">
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
            <Button
              content="Contact Us"
              change={true}
              variant="py-2.5 px-5 bg-royal-blue text-white hover:bg-white hover:font-bold hover:text-royal-blue"
            />
          </div>
        </div>

        {/* Open and close buttons */}
        <div className="block md:hidden">
          <button
            className={`flex items-center absolute top-7 right-0 z-50 py-2 ${
              isOpen ? "px-6" : "px-4"
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            <img
              src={isOpen ? close : open}
              ref={menuRef}
              alt="Toggle menu"
              className={`${isOpen ? "w-8" : "w-10"}`}
            />
          </button>
        </div>

        {/* SIDE-MENU */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-dark-700 fixed top-0 right-0 h-screen w-2/3 z-40`}
        >
          {/* MOBILE NAV */}
          <div className="mt-36 pl-6 text-neutral-blue-700 space-y-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`py-2 block hover:border-b-3 hover:border-white/70 ${
                  activeSection === link.id ? "border-b-3 border-white" : ""
                } `}
                onClick={() => {
                  return setOpen(false), handleClick(`${link.id}`);
                }}
              >
                {link.text}
              </a>
            ))}

            {/* Call to action button */}
            <a
              href="#contact"
              className="inline-block py-2.5 px-5 normal-case bg-royal-blue text-white font-bold rounded-default hover:bg-white hover:font-bold hover:text-royal-blue"
              onClick={handleLinkClick}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

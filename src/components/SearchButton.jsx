import { useState, useEffect } from "react";
import Button from "./Button";

export default function SearchButton() {
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)"); // adjust the breakpoint as needed
    if (mq.matches) {
      setPlaceholder("Search by Location, Type, Budget");
    } else {
      setPlaceholder("Search");
    }
    // update the placeholder when the screen size changes
    mq.addEventListener("change", (e) => {
      if (e.matches) {
        setPlaceholder("Search by Location, Type, Budget");
      } else {
        setPlaceholder("Search");
      }
    });
  }, []);

  return (
    <form className="mt-8 mb-0.5">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-5 pl-10 text-sm border rounded-default text-dark-700 focus:ring-royal-blue focus:ring-4 focus:outline-none font-medium placeholder:text-dark-400 placeholder:italic"
          placeholder={placeholder}
          required
        />
        <Button
          content="Search"
          variant="text-white absolute right-2.5 bottom-2.5 bg-royal-blue hover:bg-blue-800
      focus:ring-1 lg:focus:ring-2 focus:outline-none focus:ring-royal-blue font-semibold p-2.5"
        />
      </div>
    </form>
  );
}

"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center lg:px-28 px-10 py-4 bg-[rgba(16,1,29,0.7)] backdrop-blur-lg fixed w-full z-10">
      <h1 className="text-2xl font-bold">
        <a href="#home" className="text-2xl text-white">
          Port<span className="text-purple-500">folio.</span>
        </a>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden sm:block">
        <ul className="flex gap-8">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:underline hover:text-[rgb(139,92,246)] hover:underline-offset-8 font-medium text-base"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="block sm:hidden" onClick={toggleMenu}>
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Menu / Menu_Alt_02">
            <path
              id="Vector"
              d="M11 17H19M5 12H19M11 7H19"
              stroke="#a855f7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-[#2b143c] sm:hidden px-20 py-5 rounded-lg">
          <ul className="flex flex-col items-center gap-6">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-purple-200 hover:text-purple-300 text-lg font-medium"
                  onClick={() => setIsOpen(false)} 
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Mobile Menu Button */}
      <div className="sticky top-0 z-50 bg-[#067CA6] py-[1rem]">
        <header className="app-container">
          <div className="flex items-center justify-between">
            <div>
              <img
                src="https://phillipsakindeleandco.com/images/index-app/pac-logo-white.png"
                alt="Phillips Akindele and Co"
              />
            </div>
            <nav className="hidden md:block">
              {/* Your desktop navigation */}
              <ul className="flex gap-[3rem]">
                {navLink.map((link) => (
                  <li
                    key={link}
                    className="h-[80px] cursor-pointer text-[1.1rem] font-light uppercase leading-[80px] text-white hover:mt-[-7px] hover:border-t-8"
                  >
                    <a href={`/#${link.replace(" ", "")}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden text-right text-white md:block">
              {/* Your contact info */}
              <p>Lagos, Nigeria</p>
              <strong className="text-[1.2rem]">
                08033510318 | 07064171650
              </strong>
              <p>Phillips Akindele & Co.</p>
            </div>
            <div className="block  cursor-pointer md:hidden">
              {isMobileMenuOpen ? (
                <button
                  className="text-5xl text-white font-bold"
                  onClick={toggleMobileMenu}
                >
                  &times;
                </button>
              ) : (
                <button onClick={toggleMobileMenu} className="space-y-1">
                  <span className="block h-1 w-8 rounded-md bg-white"></span>
                  <span className="block h-1 w-8 rounded-md bg-white"></span>
                  <span className="block h-1 w-8 rounded-md bg-white"></span>
                </button>
              )}
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-[9%] transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 bg-gray-800 bg-opacity-75 transition-transform duration-300 ease-in-out`}
      >
        <div className="h-full w-full bg-white p-4">
          <ul className="flex flex-col gap-4">
            {navLink.map((link) => (
              <li
                key={link}
                className="text-[1.1rem] font-light uppercase text-black hover:text-[#067CA6]"
              >
                <a
                  href={`/#${link.replace(" ", "")}`}
                  onClick={toggleMobileMenu}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

const navLink = ["home", "about", "why us", "team", "client", "contact"];

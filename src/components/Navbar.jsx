import React, { useState } from "react";
import logo from "../images/logo1.jpg"

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Mobile Menu Button */}
      <div className=" bg-white  py-[.5rem] shadow-md">
        <header className="app-container">
          <div className="flex items-center justify-between">
            <a href="#home" className="">
              <img
                src={logo}
                alt="Phillips Akindele and Co"
                width={150}
              />
            </a>
            <nav className="hidden md:block">
              {/* Your desktop navigation */}
              <ul className="flex gap-[1rem]">
                {navLink.map((link) => (
                  <li
                    key={link}
                    className="h-[80px] cursor-pointer text-[.9rem] uppercase leading-[80px]  hover:mt-[-7.5px] hover:border-t-8"
                  >
                    <a href={`#${link.replace(" ", "")}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* <div className="hidden text-right md:block">
              <p
                style={{ fontFamily: "eb-garamond-08-italic" }}
                className="italic"
              >
                Lagos, Nigeria
              </p>
              <strong
                className="text-[1.2rem] font-bold text-[#0D1A3C]"
                style={{ fontFamily: "Nunito" }}
              >
                08033510318 | 07064171650
              </strong>
              <p
                style={{ fontFamily: "eb-garamond-08-italic" }}
                className="italic"
              >
                Phillips Akindele & Co.
              </p>
            </div> */}
            <div className="block  cursor-pointer md:hidden">
              {isMobileMenuOpen ? (
                <button
                  className="text-5xl font-bold text-[#009FE3]"
                  onClick={toggleMobileMenu}
                >
                  &times;
                </button>
              ) : (
                <button onClick={toggleMobileMenu} className="space-y-1">
                  <span className="block h-1 w-8 rounded-md bg-[#009FE3]"></span>
                  <span className="block h-1 w-8 rounded-md bg-[#009FE3]"></span>
                  <span className="block h-1 w-8 rounded-md bg-[#009FE3]"></span>
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
                  href={`#${link.replace(" ", "")}`}
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

const navLink = ["home", "about", "why us", "team", "contact"];

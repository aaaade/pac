import React from "react";

function Navbar() {
  return (
    <div className="bg-[#067CA6] py-[1rem] sticky top-0 z-50">
      <header className="app-container">
        <div className="flex items-center justify-between">
          <div>
            <img
              src="https://phillipsakindeleandco.com/images/index-app/pac-logo-white.png"
              alt="Phillips Akindele and Co"
            />
          </div>
          <nav>
            <ul className="flex gap-[3rem]">
              {navLink.map((link) => (
                <li
                  key={link}
                  className="h-[80px] cursor-pointer uppercase leading-[80px] text-white hover:mt-[-7px] hover:border-t-8 text-[1.1rem] font-light"
                >
                  <a href={`/#${link.replace(" ", "")}`}>{link}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-right text-white">
            <p>Lagos, Nigeria</p>
            <strong className="text-[1.2rem]">08033510318 | 07064171650</strong>
            <p>Phillips Akindele & Co.</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

const navLink = ["home", "about", "why us", "team", "client", "contact"];

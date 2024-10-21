"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function renderMenu() {
    if (!isMenuOpen) {
      return (
        <div className="lg:hidden">
          <i
            className="bx bx-menu cursor-pointer text-5xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      );
    } else {
      return (
        <div className="lg:hidden">
          <i
            className="bx bx-x cursor-pointer text-5xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      );
    }
  }

  return (
    <>
      <header>
        <nav className="fixed top-0 z-50 w-full bg-white">
          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b-2 border-gray-300 p-2">
              <div className="justify-around">
                <p className="text-3xl text-gray-600 md:text-4xl lg:text-5xl">
                  Rayan Saintenoy
                </p>
                <p className="text-2xl text-gray-500 md:text-3xl lg:text-4xl">
                  Étudiant en développement
                </p>
              </div>
              <div className="">
                <ul className="hidden gap-5 lg:flex">
                  <li>
                    <a
                      onClick={() => {
                        const aboutSection = document.getElementById("about");

                        aboutSection?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-2xl text-gray-500 no-underline hover:border-b-2 hover:border-gray-300 hover:transition-all"
                    >
                      Présentation
                    </a>
                  </li>

                  <li>
                    <a
                      onClick={() => {
                        const aboutSection =
                          document.getElementById("parcours");

                        aboutSection?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-2xl text-gray-500 no-underline hover:border-b-2 hover:border-gray-300 hover:transition-all"
                    >
                      Mes Projets
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        const aboutSection =
                          document.getElementById("technologie");

                        aboutSection?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-2xl text-gray-500 no-underline hover:border-b-2 hover:border-gray-300 hover:transition-all"
                    >
                      Technologie
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        const aboutSection = document.getElementById("contact");

                        aboutSection?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-2xl text-gray-500 no-underline hover:border-b-2 hover:border-gray-300 hover:transition-all"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {renderMenu()}
            </div>
            {isMenuOpen && (
              <>
                <div
                  className={
                    'trasnform ${isMenuOpen ? "opacity-100" : "opacity-0" right-0 top-24 flex w-full flex-col items-center border-b-2 border-gray-300 bg-white text-lg transition-transform lg:hidden'
                  }
                >
                  <li
                    onClick={() => {
                      const aboutSection = document.getElementById("about");

                      aboutSection?.scrollIntoView({ behavior: "smooth" });
                      setIsMenuOpen(false);
                    }}
                    className="w-full cursor-pointer list-none p-4 text-center text-gray-500 transition-all hover:bg-gray-500 hover:text-white"
                  >
                    <a className="border-b-2 border-gray-400 text-2xl no-underline">
                      Présentation
                    </a>
                  </li>

                  <li
                    onClick={() => {
                      const aboutSection = document.getElementById("parcours");

                      aboutSection?.scrollIntoView({ behavior: "smooth" });
                      setIsMenuOpen(false);
                    }}
                    className="w-full cursor-pointer list-none p-4 text-center text-gray-500 transition-all hover:bg-gray-500 hover:text-white"
                  >
                    <a className="border-b-2 border-gray-400 text-2xl no-underline">
                      Mes Projets
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      const aboutSection =
                        document.getElementById("technologie");

                      aboutSection?.scrollIntoView({ behavior: "smooth" });
                      setIsMenuOpen(false);
                    }}
                    className="w-full cursor-pointer list-none p-4 text-center text-gray-500 transition-all hover:bg-gray-500 hover:text-white"
                  >
                    <a className="border-b-2 border-gray-400 text-2xl no-underline">
                      Technologie
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      const aboutSection = document.getElementById("contact");

                      aboutSection?.scrollIntoView({ behavior: "smooth" });
                      setIsMenuOpen(false);
                    }}
                    className="w-full cursor-pointer list-none p-4 text-center text-gray-500 transition-all hover:bg-gray-500 hover:text-white"
                  >
                    <a className="border-b-2 border-gray-400 text-2xl no-underline">
                      Contact
                    </a>
                  </li>
                </div>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

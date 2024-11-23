import React, { useEffect, useRef, useState } from "react";
import { FiSearch, FiGrid, FiUser } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import SearchDropdown from "./Components/SearchDropdown";
import SlideInMenu from "./Components/SlideInMenu";

const Navbar = () => {
  // State to manage dropdown visibility
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, closeDropdown]);



  // responsive menu

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  
  const toggleAccordion = (section) => {
    setActiveAccordion((prev) => (prev === section ? null : section));
  };

  const apps = [
    { name: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" },
    { name: "Maps", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmrsnEVL9Kk5ezoASGtmYwSf4LMA7NKDaf97KryNuCWZlQNi7vumNaVT008Ef7dq7N28&usqp=CAU" },
    { name: "Gmail", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdBWA1bRlcWMoqs0jfAd9wO59u6Jb8PvrAQ&s" },
    { name: "Google Photos", img: "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA" },
    { name: "Google Meet", img: "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png" },
    { name: "Google Drive", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/640px-Google_Drive_icon_%282020%29.svg.png" },
    { name: "App 7", img: "https://via.placeholder.com/100" },
    { name: "App 8", img: "https://via.placeholder.com/100" },
    { name: "App 9", img: "https://via.placeholder.com/100" },
  ];

  return (
    <header className="w-full bg-white" ref={dropdownRef}>
      <div className="max-w-[1345px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* responsive button */}
        <button type="button"  onClick={toggleMenu}   aria-label="Main menu" aria-haspopup="true"
          class="inline-flex items-center justify-center lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
          <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
          <div className="bg-blue-500 w-8 h-8 flex justify-center items-center rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 542.8 546.3"
              className="w-6 h-6"
            >
              <style type="text/css">{`
        .st0 { fill: #15498A; }
        .st1 { fill: #FFFFFF; }
      `}</style>
              <path
                className="st0"
                d="M0,39.1C0,17.5,18,0,40.1,0h462.6c22.2,0,40.1,17.5,40.1,39.1v468c0,21.6-18,39.1-40.1,39.1H40.1
        C18,546.3,0,528.8,0,507.2L0,39.1L0,39.1z"
              />
              <g>
                <path
                  className="st1"
                  d="M217.5,91.3L35.7,273.2L217.5,455l181.9-181.9L217.5,91.3z M118.5,273.2l99.3-99.3l99.3,99.3
          l-99.3,99.3L118.5,273.2z"
                />
                <path
                  className="st1"
                  d="M445.7,273.2l-99.3,99.3l-99.3-99.3l99.3-99.3l-0.3-82.5L164.3,273.2L346.1,455L528,273.2H445.7
          z"
                />
              </g>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">IMDTEC</h1>
        </div>
         {/* navbar */}

            <div>
              <SlideInMenu toggleMenu={toggleMenu}
              menuOpen={menuOpen}
              toggleAccordion={toggleAccordion}
              activeAccordion={activeAccordion}
              ></SlideInMenu>
            </div>
        {/* Navigation Links */}

        <nav className="lg:flex lg:flex-row items-center gap-8 hidden" ref={dropdownRef}>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="text-gray-700 font-medium hover:text-blue-500 focus:outline-none flex items-center"
            >
              Services

              <span> <svg id="secteurs-arrow" class="w-4 h-4 transition-transform duration-300" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg></span>
            </button>
            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -left-[300%]  top-10 mt-2 w-[800px] flex flex-col lg:flex-row bg-[#f9f5fc] text-gray-700 shadow-lg border rounded-lg over transform -translate-x-1/2"
                >
                  {/* Left Column: Menu Links */}
                  <div className="w-full lg:w-1/3 bg-[#fbf6ff] py-6 px-6 border-r border-gray-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Nos activités</h3>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="flex items-center gap-2 text-purple-700 font-medium hover:underline">
                          Audit
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-700 hover:underline">
                          Audit & Assurance Solutions
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-700 hover:underline">
                          Conseil Financier
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-700 hover:underline">
                          Conseil Opérationnel
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-700 hover:underline">
                          Expertise Conseil
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-700 hover:underline">
                          Conseil Juridique et Fiscal
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-700 hover:underline">
                          Transformation Durable
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-700 hover:underline">
                          International Business Advisory
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Right Content Section */}
                  <div className="w-full lg:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">Audit</h3>
                    <p className="text-gray-600 mb-4">
                      Grant Thornton, acteur majeur de l'Audit en France et dans le monde auprès de grands groupes, ETI, entreprises familiales et du secteur public.
                    </p>
                    <a href="#" className="inline-block text-purple-700 font-medium hover:underline mb-6">Voir cette page →</a>

                    <div>
                      {/* Service Links Section */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-sm font-bold text-gray-800 mb-2">Un réseau international puissant et intégré</h4>
                          <p className="text-sm text-gray-600">
                            Un réseau international fidèle autour d'une promesse commune.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-800 mb-2">Digital Audit - Data Analytics</h4>
                          <p className="text-sm text-gray-600">
                            Optimisez vos audits grâce à des outils performants et adaptatifs.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-800 mb-2">Doctrine comptable</h4>
                          <p className="text-sm text-gray-600">
                            Expertise en doctrine comptable pour accompagner vos besoins spécifiques.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-800 mb-2">L'Audit au cœur des territoires</h4>
                          <p className="text-sm text-gray-600">
                            Une implantation au cœur des territoires pour un service de proximité.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-800 mb-2">Public - Économie Sociale</h4>
                          <p className="text-sm text-gray-600">
                            Services adaptés aux besoins des secteurs public et économique.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-800 mb-2">Financial Services</h4>
                          <p className="text-sm text-gray-600">
                            Nos experts en assurance vous accompagnent pour atteindre vos objectifs financiers.
                          </p>
                        </div>
                      </div>

                      {/* Insight Section */}
                      <div className="mt-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-4">Insight :</h4>
                        <div className="flex items-center bg-white shadow-sm border rounded-lg p-4">
                          <img src="https://via.placeholder.com/100" alt="Insight Image" className="w-16 h-16 rounded-lg mr-4" />
                          <div>
                            <h5 className="text-sm font-bold text-gray-800">IFRS Example Consolidated Financial...</h5>
                            <p className="text-sm text-gray-500">Less than a minute | 17 Oct. 2023</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>




          {/* Secteurs Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("secteurs")}
              className="text-gray-700 font-medium hover:text-blue-500 focus:outline-none flex items-center"
            >
              Secteurs

              <span> <svg id="secteurs-arrow" class="w-4 h-4 transition-transform duration-300" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg></span>
            </button>
            <AnimatePresence>
              {activeDropdown === "secteurs" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -left-[300px] top-10 mt-2  w-[800px] flex flex-col lg:flex-row bg-[#f9f5fc] text-gray-700 shadow-lg border rounded-lg overflow-auto transform -translate-x-1/2"
                >
                  {/* Left Column: Menu Links */}
                  <div className="w-full lg:w-1/3 bg-[#fbf6ff] py-6 px-6 border-r border-gray-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Nos secteurs</h3>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="flex items-center gap-2 text-purple-700 font-medium hover:underline">
                          Santé
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-700 hover:underline">
                          Technologie
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-700 hover:underline">
                          Finance
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-700 hover:underline">
                          Immobilier
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-700 hover:underline">
                          Éducation
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-700 hover:underline">
                          Secteur Public
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Right Content Section */}
                  <div className="w-full lg:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">Santé</h3>
                    <p className="text-gray-600 mb-4">
                      Découvrez comment nous accompagnons les acteurs du secteur de la santé pour relever les défis d'aujourd'hui et de demain.
                    </p>
                    <a href="#" className="inline-block text-purple-700 font-medium hover:underline mb-6">Voir cette page →</a>

                    {/* Sector Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-2">Innovation en Santé</h4>
                        <p className="text-sm text-gray-600">
                          Soutenir l'innovation pour améliorer les résultats des patients.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-2">Digitalisation</h4>
                        <p className="text-sm text-gray-600">
                          Accélérer la transformation digitale pour des soins connectés.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-2">Partenariats Public-Privé</h4>
                        <p className="text-sm text-gray-600">
                          Collaborer avec les acteurs publics et privés pour une meilleure efficacité.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-2">Compliance et Réglementations</h4>
                        <p className="text-sm text-gray-600">
                          Respect des réglementations strictes dans le secteur de la santé.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-2">Gestion Financière</h4>
                        <p className="text-sm text-gray-600">
                          Optimiser les coûts tout en améliorant la qualité des soins.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-2">Formation et Développement</h4>
                        <p className="text-sm text-gray-600">
                          Investir dans les talents pour relever les défis du secteur.
                        </p>
                      </div>
                    </div>

                    {/* Insight Section */}
                    <div className="mt-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Insight :</h4>
                      <div className="flex items-center bg-white shadow-sm border rounded-lg p-4">
                        <img src="https://via.placeholder.com/100" alt="Insight Image" className="w-16 h-16 rounded-lg mr-4" />
                        <div>
                          <h5 className="text-sm font-bold text-gray-800">Rapport sur la digitalisation de la santé</h5>
                          <p className="text-sm text-gray-500">2 minutes de lecture | 5 Nov. 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="text-gray-700 font-medium hover:text-blue-500">
            Products
          </button>
          <button className="text-gray-700 font-medium hover:text-blue-500">
            Insights
          </button>
          <button className="text-gray-700 font-medium hover:text-blue-500">
            Support
          </button>
          <button className="text-gray-700 font-medium hover:text-blue-500">
            Azuregram
          </button>
        </nav>

        {/* Icons */}
        <div className="flex items-start gap-4">
          <SearchDropdown toggleDropdown={toggleDropdown} dropdownRef={dropdownRef} activeDropdown={activeDropdown}></SearchDropdown>
          {/* Icon Dropdown */}
          <div className="relative inline-block">
            {/* Icon Button */}
            <button
              onClick={() => toggleDropdown("grid")}
              className={`text-xl cursor-pointer transition-colors ${activeDropdown === "grid" ? "text-gray-400" : "text-gray-600 hover:text-blue-500"
                }`}
            >  <img src="https://www.svgrepo.com/show/345405/grid.svg" alt="Grid" class="w-8 h-8" /></button>
            <AnimatePresence>
              {/* Dropdown Menu */}
              {activeDropdown === "grid" && (
                <motion.div
                  // Attach the ref for outside click detection
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 mt-4 w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50"
                >
                  {/* Grid of Apps */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {apps.map((app, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center"
                      >
                        <img
                          src={app.img}
                          alt={app.name}
                          className="w-16 h-16 rounded-lg shadow-md"
                        />
                        <span className="mt-2 text-sm text-gray-700">{app.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Button */}
                  <a
                    href="https://about.google/products/" 
                    className="block text-center text-sm text-white bg-blue-500 hover:bg-blue-600 font-medium py-2 rounded-lg transition-colors"
                  >
                    See More Apps
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button className="lg:inline hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              {/* Font Awesome Free 6.7.0 by @fontawesome - https://fontawesome.com */}
              <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320h-64c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256 48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

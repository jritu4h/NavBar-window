import React from "react";

const SlideInMenu = ({ toggleMenu, menuOpen, toggleAccordion, activeAccordion }) => {
  return (
    <div className="relative z-50">
      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white text-gray-800 transition-transform transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-2 left-4 text-gray-800 text-2xl"
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 384 512">
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
        </button>

        {/* Accordion Sections */}
        <div className="mt-16">
          {/* Services Accordion */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion("services")}
              className="w-full text-left px-6 py-3"
            >
              Services
            </button>
            {activeAccordion === "services" && (
              <div className=" mt-2 flex flex-col lg:flex-row bg-[#f9f5fc] text-gray-700 shadow-lg border rounded-lg z-50 h-[500px] overflow-y-scroll">
                {/* Left Column: Menu Links */}
                <div className="w-full lg:w-1/3 bg-[#fbf6ff] py-6 px-4 lg:px-6 border-r border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Nos activités</h3>
                  <ul className="space-y-4">
                    {[
                      "Audit",
                      "Audit & Assurance Solutions",
                      "Conseil Financier",
                      "Conseil Opérationnel",
                      "Expertise Conseil",
                      "Conseil Juridique et Fiscal",
                      "Transformation Durable",
                      "International Business Advisory",
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="flex items-center gap-2 text-gray-600 hover:text-purple-700 font-medium hover:underline"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Content Section */}
                <div className="w-full lg:w-2/3 p-6">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">Audit</h3>
                  <p className="text-gray-600 mb-4">
                    Grant Thornton, acteur majeur de l'Audit en France et dans le monde auprès de grands groupes,
                    ETI, entreprises familiales et du secteur public.
                  </p>
                  <a
                    href="#"
                    className="inline-block text-purple-700 font-medium hover:underline mb-6"
                  >
                    Voir cette page →
                  </a>

                  {/* Service Links */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Un réseau international puissant et intégré",
                        content: "Un réseau international fidèle autour d'une promesse commune.",
                      },
                      {
                        title: "Digital Audit - Data Analytics",
                        content: "Optimisez vos audits grâce à des outils performants et adaptatifs.",
                      },
                      {
                        title: "Doctrine comptable",
                        content: "Expertise en doctrine comptable pour accompagner vos besoins spécifiques.",
                      },
                      {
                        title: "L'Audit au cœur des territoires",
                        content: "Une implantation au cœur des territoires pour un service de proximité.",
                      },
                      {
                        title: "Public - Économie Sociale",
                        content: "Services adaptés aux besoins des secteurs public et économique.",
                      },
                      {
                        title: "Financial Services",
                        content: "Nos experts en assurance vous accompagnent pour atteindre vos objectifs financiers.",
                      },
                    ].map((service, index) => (
                      <div key={index}>
                        <h4 className="text-sm font-bold text-gray-800 mb-2">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.content}</p>
                      </div>
                    ))}
                  </div>

                  {/* Insight Section */}
                  <div className="mt-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Insight :</h4>
                    <div className="flex items-center bg-white shadow-sm border rounded-lg p-4">
                      <img
                        src="https://via.placeholder.com/100"
                        alt="Insight"
                        className="w-16 h-16 rounded-lg mr-4"
                      />
                      <div>
                        <h5 className="text-sm font-bold text-gray-800">
                          IFRS Example Consolidated Financial...
                        </h5>
                        <p className="text-sm text-gray-500">Less than a minute | 17 Oct. 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Secteurs Accordion */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion("secteurs")}
              className="w-full text-left px-6 py-3"
            >
              Secteurs
            </button>
            {activeAccordion === "secteurs" && (
              <div className="mt-2 flex flex-col lg:flex-row bg-[#f9f5fc] text-gray-700 shadow-lg border rounded-lg z-50 h-[500px] overflow-y-scroll">
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
                <div className="w-full lg:w-2/3 p-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">Santé</h3>
                    <p className="text-gray-600 mb-4">
                      Découvrez comment nous accompagnons les acteurs du secteur de la santé pour relever les défis d'aujourd'hui et de demain.
                    </p>
                    <a href="#" className="inline-block text-purple-700 font-medium hover:underline">
                      Voir cette page →
                    </a>
                  </div>

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
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Insight :</h4>
                    <div className="flex items-center bg-white shadow-sm border rounded-lg p-4">
                      <img src="https://via.placeholder.com/100" alt="Insight Image" className="w-16 h-16 rounded-lg mr-4" />
                      <div className="min-w-0">
                        <h5 className="text-sm font-bold text-gray-800 truncate">
                          Rapport sur la digitalisation de la santé
                        </h5>
                        <p className="text-sm text-gray-500">2 minutes de lecture | 5 Nov. 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="mt-4 px-6">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Products
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Insights
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Support
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Azuregram
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideInMenu;

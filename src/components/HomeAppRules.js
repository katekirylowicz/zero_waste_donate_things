import React from "react";
{/*import { Link } from "react-router-dom"; */ }

// import tShirt from "../public/assets/Icon-1.svg";
// import paperbag from "../public/assets/Icon-2.svg";
// import search from "../public/assets/Icon-3.svg";
// import loader from "../public/assets/Icon-4.svg";

const HomeAppRules = () => {
  return (
    <section id="howItWorks">
      <h2>Wystarczą 4 proste kroki </h2>
      <div className="about-app">
        <div className="about-app__container">
          <div className="about-app__content">
            <img src="" alt="T-shirt icon" />
            <h3>Wybierz rzeczy</h3>
            <span>ubrania, zabawki, sprzęt i inne</span>
          </div>
          <div className="about-app__content">
            <img src="" alt="Paperbag icon" />
            <h3>Spakuj je</h3>
            <span>skorzystaj z worków na śmieci</span>
          </div>
          <div className="about-app__content">
            <img src="" alt="Searching icon" />
            <h3>
              Zdecyduj komu <br />
              chcesz pomóc
            </h3>
            <span>wybierz zaufane miejsce</span>
          </div>
          <div className="about-app__content">
            <img src="" alt="Loading icon" />
            <h3>Zamów kuriera</h3>
            <span>kurier przyjedzie w dogodnym terminie</span>
          </div>
        </div>
      </div>
      <div className="button__container">

        <span>ODDAJ RZECZY</span>

      </div>
    </section>
  );
};

export default HomeAppRules;
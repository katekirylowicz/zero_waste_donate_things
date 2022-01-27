import React from "react";
import { Link } from "react-router-dom"; 

const HomeAppRules = () => {
  return (
    <section id="howItWorks">
      <div className="decor_wrapper">
      <h2>Wystarczą 4 proste kroki </h2>
      <img className="decor" src="assets/Decoration.svg" alt="decor" />
      </div>
      <div className="about-app">
        <div className="about-app__container">
          <div className="about-app__content">
            <img src="assets/Icon-1.svg" alt="T-shirt icon" />
            <h3>Wybierz rzeczy</h3>
            <span>ubrania, zabawki, sprzęt i inne</span>
          </div>
          <div className="about-app__content">
            <img src="assets/Icon-2.svg" alt="Paperbag icon" />
            <h3>Spakuj je</h3>
            <span>skorzystaj z worków na śmieci</span>
          </div>
          <div className="about-app__content">
            <img src="assets/Icon-3.svg" alt="Searching icon" />
            <h3>
              Zdecyduj komu <br />
              chcesz pomóc
            </h3>
            <span>wybierz zaufane miejsce</span>
          </div>
          <div className="about-app__content">
            <img src="assets/Icon-4.svg" alt="Loading icon" />
            <h3>Zamów kuriera</h3>
            <span>kurier przyjedzie w dogodnym terminie</span>
          </div>
        </div>
      </div>
      <div className="button__container">

      <Link to="/rejestracja"><span class="btn">ODDAJ<br/> RZECZY</span></Link>

      </div>
    </section>
  );
};

export default HomeAppRules;
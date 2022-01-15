import React from "react";
{/*import { Link } from "react-router-dom";*/ }
// import heroImage from "../public/assets/Home-Hero-Image";
// import underlineDecor from "../public/assets/Decoration";


const HomeHeader = () => {
  return (
    <section className="header_home">
      <img className="hero_img" src="assets/Home-Hero-Image.jpg" alt="Box with things." />
      <div className="content_wrapper">
        <h1 className="hero_title">Zacznij pomagać!<br />Oddaj niechciane rzecyz w zaufane ręce</h1>
        <img className="decor" src="assets/Decoration.svg" />
        <div className="bigButtons">
          <span>oddaj rzeczy</span>
          <span>zorganizuj zbiórkę</span>
        </div>
      </div>

    </section>
  );
};

export default HomeHeader;


import React from "react";
{/*import { Link } from "react-router-dom";*/ }


const HomeHeader = () => {
  return (
    <section className="header_home">
      <img className="hero_img" src="assets/Home-Hero-Image.jpg" alt="Box with things." />
      <div className="content_wrapper">
        <h1 className="hero_title">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
        <img className="decor" src="assets/Decoration.svg" alt="decor" />
        <div className="bigButtons">
          <span class = "btn">oddaj<br/> rzeczy</span>
          <span class= "btn">zorganizuj<br/> zbiórkę</span>
        </div>
      </div>

    </section>
  );
};

export default HomeHeader;


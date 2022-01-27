import React from "react";
{/*import { Link } from "react-router-dom";*/ }


const HomeHeader = () => {
  return (
    <section className="header_home">
      <img className="hero_img" src="assets/Home-Hero-Image.jpg" alt="Box with things." />
      <div className="content_wrapper">
        <div className="decor_wrapper">
        <h1 className="hero_title">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
        <img className="decor" src="assets/Decoration.svg" alt="decor" />
        </div>
        <div className="bigButtons">
          <div class = "btn">oddaj<br/> rzeczy</div>
          <div class= "btn">zorganizuj<br/> zbiórkę</div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;


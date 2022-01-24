import React from "react";
import {Link} from "react-router-dom";
import ScrollLink from "../Helpers/ScrollLink.js";


const Menu = () => {
return (
  <section className = "menu_container"> 
<nav>
  <ul className = "login">
    <li><Link to="/logowanie">Zaloguj</Link></li>
    <li><Link to= "/rejestracja">Załóż konto</Link></li>
  </ul>
  <ul className="nav">
<li><Link to ="/">Start</Link></li>
<li><ScrollLink path="about-app" text="O co chodzi?"/></li>
<li><ScrollLink path="about-us" text="O nas" /></li>
<li><ScrollLink path="help_header" text="Fundacja i organizacje"/></li>
<li><ScrollLink path="contact" text="Kontakt" /></li>
</ul>
</nav>
</section>
);
}

export default Menu;
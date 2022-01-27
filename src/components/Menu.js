import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import ScrollLink from "../Helpers/ScrollLink.js";



const Menu = () => {

  const [isOpen,setOpen] = useState(false);
  const location = useLocation();

  useEffect(()=> {
    setOpen(false);
  }, [location]);


return (
  <section className = "menu_container"> 
  <button
          className={`hamburger-button ${isOpen ? "open" : "close"}`}
          onClick={() => setOpen(!isOpen)}
        >
          <span className="bar b1"></span>
          <span className="bar b2"></span>
          <span className="bar b3"></span>
        </button>
<div className = "navi_wrapper">        
<nav className={`panel ${isOpen ? "open" : "close"}`}>

  <ul className = "login">
    <li className ="log_btn"><Link to="/logowanie">Zaloguj</Link></li>
    <li className= "log_btn"><Link to= "/rejestracja">Załóż konto</Link></li>
  </ul>
  <ul className="nav" className="main_navi">
<li className="main_navi_item"><Link to ="/">Start</Link></li>
<li className="main_navi_item"><ScrollLink path="about-app" text="O co chodzi?"/></li>
<li className="main_navi_item"><ScrollLink path="about-us" text="O nas" /></li>
<li className="main_navi_item"><ScrollLink path="help_header" text="Fundacja i organizacje"/></li>
<li className="main_navi_item"><ScrollLink path="contact" text="Kontakt" /></li>
</ul>
</nav>
</div>
</section>
);
}

export default Menu;
import React from "react";
import {Link} from "react-router-dom";

const LogOUT = ()=> {
  
  
  
  
  
  return (
    <section className="logout">
      <h5>Wylogowanie nastąpiło pomyślnie! </h5>
      
      <Link to="/" className="log_button">
        Strona główna
      </Link>
    </section>
  );
}

export default LogOUT;
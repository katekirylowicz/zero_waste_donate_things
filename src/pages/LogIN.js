import React from "react";
import {Link} from "react-router-dom";

const LogIN = ()=> {
  
  
  
  
  
  return (
    <section className="log_container">
    <h5>Zaloguj się</h5>
    <img className="decor" src="assets/Decoration.svg" alt="decor" />
    <form className="form__container">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
        />
       
        <label htmlFor="password">Hasło</label>
        <input
          name="password"
          type="password" 
        />

        
        
    </form>
    <div className="log__btns">
      
        <Link to="/rejestracja" className="log__btn">Załóż konto</Link>
       <Link to ="/wylogowano" className="log__btn">Zaloguj się</Link>
         
      
      </div>
  </section>
  );
}
  


export default LogIN;
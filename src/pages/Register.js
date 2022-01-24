import React from "react";
import {Link} from "react-router-dom";

const Register = ()=> {
  
  
  
  
  
  return (
    <section className="register_container">
    <h5>Załóż konto</h5>
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

        <label htmlFor="password2">Powtórz hasło</label>
        <input
          name="password2"
          type="password"
        />
        
    </form>
    <div className="register__btns">
        <Link to="/logowanie" className="register__btn">
          Zaloguj się
        </Link>
        <button className="register__btn">Załóż konto</button>
      </div>
  </section>
  );
}

export default Register;
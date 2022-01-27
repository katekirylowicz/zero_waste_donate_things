import React, {useState} from "react";
import {Link} from "react-router-dom";

const LogIN = ()=> {
  
  const initialFormValues = { email: "",password:""};
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState (false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
  };
  
  const handleSubmit = (e) => {
   e.preventDefault();
   setFormErrors(validate(formValues));
   setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Write your e-mail."
    } else if (!reg.test(values.email)){
      errors.email = "E-mail is incorrect."
    }

    if (!values.password) {
      errors.password = "Write your password."
    } else if (values.password.length < 6) {
      errors.password = "Password should consist of 6 characters. "
    }
    return errors;
  }
  
  
  
  return (
    <section className="log_container">
    <h5>Zaloguj się</h5>
    
    {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="log__success">
          Jesteś zalogowany jako {formValues.email}
        </div>
      ) : null}

    
    <img className="decor" src="assets/Decoration.svg" alt="decor" />
    <form className="form__container" onSubmit = {handleSubmit}>

        <label htmlFor="email">Email</label>
        <input
          className = {!!formErrors.email ? "log__input error" : "log__input"}
          name="email"
          type="text"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email ? ( <span className ="log__error"> {formErrors.email} </span> ) : null}
       
        <label htmlFor="password">Hasło</label>
        <input
          className = {!!formErrors.password ? "log__input error" : "log__input"}
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange} 
        />
        {formErrors.password ? (<span className="log__error">{formErrors.password}</span>) : null}
        <div className="log__btns">
      
      <Link to="/rejestracja" className="log__btn">Załóż konto</Link>
     <button className="log__btn">Zaloguj się</button>
       
    
    </div>
        
        
    </form>
  
  </section>
  );
}
  


export default LogIN;
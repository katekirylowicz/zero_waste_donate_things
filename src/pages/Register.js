import React, {useState} from "react";
import {Link} from "react-router-dom";

const Register = ()=> {
  
  
    const initialValues = { email:"", password:"", password2:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({...formValues, [name]: value});
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.email) {
        errors.email = "Write your e-mail!";
      } else if (!regex.test(values.email)) {
        errors.email = "Email is incorrect!";
      }
      if (!values.password) {
        errors.password = "Write your password!";
      } else if (values.password.length < 6) {
        errors.password = "Password should consist of 6 characters!";
      }
      if (!values.password2) {
        errors.password2 = "Repeat your password!";
      } else if (values.password !== values.password2) {
        errors.password2 = "The passwords entered do not match!";
      }
      return errors;
    };
  
  
  
  return (
    <section className="register_container">
    <h5>Załóż konto</h5>
    <img className="decor" src="assets/Decoration.svg" alt="decor" />

    {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="log__success">
          Zostałeś zarejestowany jako {formValues.email}
        </div>
      ) : null}

    <form className="form__container" onSubmit ={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className={!!formErrors.email ? "log__input error" : "log__input"}
          name="email"
          type="text"
          value={formValues.email}
          onChange={handleChange}

        />
        {formErrors.email ? (<span className="log__error">{formErrors.email}</span>) : null}

        <label htmlFor="password">Hasło</label>
        <input
          className={!!formErrors.password ? "log__input error" : "log__input" }
          name="password"
          type="password" 
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.password ? (<span className="log__error">{formErrors.password}</span>) : null}

        <label htmlFor="password2">Powtórz hasło</label>
        <input
          className={!!formErrors.password2 ? "log__input error" : "log__input"}
          name="password2"
          type="password"
          value={formValues.email}
          onChange={handleChange}
        />

         <div className="register__btns">
          <Link to="/logowanie" className="register__btn">
           Zaloguj się
          </Link>
        <button className="register__btn">Załóż konto</button>
      </div>
    </form>
   
  </section>
  );
};

export default Register;
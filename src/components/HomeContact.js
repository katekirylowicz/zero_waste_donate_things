import React, {useState} from "react";


const HomeContact = () =>{
  const initialFormValues = {name: "", message: ""};
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e)=> {
  const { name,value} =e.target;
  setFormValues({... formValues,[name]:value});
  };
  const handleSubmit = (e)=> {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {

    const errors = {};
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const name_regex = /^\S*$/;
   
   

    if (!values.name) {
      errors.name = "Wpisz swoje imię!";
    } else if (!name_regex.test(values.name)) {
      errors.name = "Podane imię jest nieprawidłowe!";
    }
    if (!values.email) {
      errors.email = "Wpisz swój email!";
    } else if (!email_regex.test(values.email)) {
      errors.email = "Podany email jest nieprawidłowy!";
    }
    if (!values.message) {
      errors.message = "Wpisz swoją wiadomość";
    } else if (values.message.length < 3) {
      errors.message = "Twoja wiadomość jest za krótka!";
    }
    return errors;
  };
//fetch api request

  


return (
<section id="contact" className="contact">
      
      <div className="contact__form">
      <h5 class ="contact_header">Skontaktuj się z nami</h5>
      <img className="decor" src="assets/Decoration.svg" alt="decor" />
        <form onSubmit={handleSubmit}>
          
          <div className="inputs__container">
            <div className="form__field">
              <label htmlFor="name">Wpisz swoje imię</label>
              <input
                className={!!formErrors.name ? "error" : ""}
                type="text"
                id="name"
                name="name"
                placeholder="Imię"
                value={formValues.name}
                onChange={handleChange}
        
              />
              {formErrors.name ? (
                <span className="contact__error">{formErrors.name}</span>
              ) : null}
              
            </div>

            <div className="form__field">
              <label htmlFor="email">Wpisz swój email</label>
              <input
                className={!!formErrors.email ? "error" : ""}
                type="text"
                id="email"
                name="email"
                placeholder="abc@xyz.com"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email ? (
                <span className="contact__error">{formErrors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="textarea__container">
            <label htmlFor="message">Wpisz swoją wiadomość</label>
            <textarea
              className={!!formErrors.message ? "error" : ""}
              rows="6"
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
      
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat."
            />
            {formErrors.message ? (
              <span className="contact__error">{formErrors.message}</span>
            ) : null}
          </div>
          <button className="button">Wyślij</button>
        </form>
      </div>
      <div className="contact__footer">
        <span />
        <small>Copyright by Coders Lab</small>
        <div className="footer__social">
          <img src="assets/Facebook.svg" alt="Facebook ico" />
          <img src="assets/Instagram.svg" alt="Instagram ico" />
        </div>
      </div>
    </section>
);
}





export default HomeContact;
import React from "react";

// import people from "../public/assets/People.jpg";
// import signature from "../public/assets/Signature.svg";

const HomeAboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      <div className="about-us__content">
        <h4>O nas"</h4>
        <p className="content__text">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img src="assets/Signature.svg" alt="Signature" />
      </div>
      <img className="about-us__image" src="assets/People.jpg" alt="People" />
    </section>
  );
};

export default HomeAboutUs;


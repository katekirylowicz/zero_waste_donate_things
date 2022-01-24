import React from "react";

const HomeThreeColumns = () => {
  return (
    <section className="statistics">
      <div className="statistic_wrapper">
        <div className="column">
          <span className="column__num">10</span>
          <h2 className="column__title">ODDANYCH WORKÓW</h2>
          <span className="column__text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </div>
        <div className="column">
          <span className="column__num">5</span>
          <h2 className="column__title">WSPARTYCH ORGANIZACJI</h2>
          <span className="column__text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </div>
        <div className="column">
          <span className="column__num">7</span>
          <h2 className="column__title">ZORGANIZOWANY ZBIÓREK</h2>
          <span className="column__text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </div>

      </div>

    </section>
  );
}

export default HomeThreeColumns;
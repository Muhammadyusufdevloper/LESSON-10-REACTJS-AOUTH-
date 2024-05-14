import React from "react";
import "./Deliver.scss";
import Services from "../../assets/images/featured/Services.svg"
import Call from "../../assets/images/featured/Call.svg"
import money from "../../assets/images/featured/money.svg"

const Deliver = () => {
  return (
    <>
      <section className="featured">
        <div className="container deliver__wrapper">
          <div className="featured__service__cards">
            <div className="featured__service__card">
              <img
                src={Services}
                alt="Services img"
              />
              <h3 className="featured__service__title">FREE AND FAST DELIVERY</h3>
              <p className="featured__service__text">
                Free delivery for all orders over $140
              </p>
            </div>
            <div className="featured__service__card">
              <img
                src={Call}
                alt="Services img"
              />
              <h3 className="featured__service__title">FREE AND FAST DELIVERY</h3>
              <p className="featured__service__text">
                Free delivery for all orders over $140
              </p>
            </div>
            <div className="featured__service__card">
              <img
                src={money}
                alt="Services img"
              />
              <h3 className="featured__service__title">FREE AND FAST DELIVERY</h3>
              <p className="featured__service__text">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deliver;

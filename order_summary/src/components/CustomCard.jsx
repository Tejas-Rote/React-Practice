// import React from "react";
import "./customCard.css";
import music from "../assets/images/icon-music.svg";
import hero from "../assets/images/illustration-hero.svg";
const CustomCard = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={hero} alt="hero" />
      </div>
      <div className="card-content">
        <div className="card-content-heading">
          <h2>Order summary</h2>
        </div>
        <div className="card-content-text">
          <p>
            You can now listen to millions of songs, audio books, and any
            podcasts on any device anwhere you like!!
          </p>
        </div>
        <div className="card-content-option">
          <div className="card-content-options-image">
            <img src={music} alt="music" />
          </div>

          <div className="card-content-option-plans">
            <h4>Annual Plan</h4>
            <p>$59.99/year</p>
          </div>
          <div className="card-content-option-change">
          <a href="#">Change</a>

          </div>
        </div>
        <div className="card-content-buttons">
          <button type="submit" id="proceed">Proceed to Payment</button>
          <button type="cancel" id="cancel">Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;

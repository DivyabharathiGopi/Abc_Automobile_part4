import React, { Component } from "react";
import "./ComponentsStyles.css";
import AboutBanner from "./automobile.jpg";
import App1 from "./MyButton";

const Aboutus = () => {
  return (
    <div className="about-us">
      <App1 />
      <h2>About us</h2>
      <div className="about-us-content">
        <h3>We are the leders on the Automobile Industry</h3>
        <p>
          Websites are a vital part of automotive success. Whether your goal is
          to gain online traffic for car sales or to increase your parts sales
          and RO count, a website is the first impression a potential customer
          gets when searching for your goods or services.An automobile (or car)
          is a land vehicle used to carry passengers. Automobiles usually have
          four wheels, and an engine or motor to make them move but relatively
          less than a truck/lorry and bus. symbols of automobiles. Statistics
          show that driving in a car is safer than riding in a fixed-wing
          aircraft
        </p>
      </div>
      <div className="about-vehicle">
        <div className="about-cars">
          <img
            className="about-us-image"
            src={AboutBanner}
            alt="automobile.jpg"
          />
          <p>
            Websites are a vital part of automotive success. Whether your goal
            is to gain online traffic for car sales or to increase your parts
            sales and RO count, a website is the first impression a potential
            customer gets when searching for your goods or services.
          </p>
        </div>
        <div className="about-cars">
          <img
            className="about-us-image"
            src={AboutBanner}
            alt="automobile.jpg"
          />
          <p>
            Websites are a vital part of automotive success. Whether your goal
            is to gain online traffic for car sales or to increase your parts
            sales and RO count, a website is the first impression a potential
            customer gets when searching for your goods or services.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;

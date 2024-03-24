import React, { Component } from "react";

import "./ComponentsStyles.css";
import Banner from "./auto-mobile.jpg";

const Home = () => {
  return (
    <div className="home-banner">
      <img src={Banner} alt="auto-mobile.jpg" width="100%" />
    </div>
  );
};
export default Home;

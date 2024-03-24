
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Component/Home";
import Aboutus from "./Component/Aboutus";
import Vehicles from "./Component/Vehicles";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
import CarDetails  from "./Component/CarDetails";
import CarList from "./Component/CarList";

let contacts = {
  official: "https://www.google.com/",
  youtube: "https://www.youtube.com/",
  twitter: "https://twitter.com/",
  email: "abc.automobile@gmail.com",
  ph: "91+1234567890",
};

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact contacts={contacts} />} />
        <Route path='/vehicles/:id' element={<CarDetails/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;

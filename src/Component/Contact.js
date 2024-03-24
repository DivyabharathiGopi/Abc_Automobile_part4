import React, { Component } from "react";
import "./ComponentsStyles.css";

const Contact = ({ contacts }) => {
  return (
    <div className="contact">
      <p>
        <a href={contacts.official}>Official Website</a>
      </p>
      <p>
        <a href={contacts.youtube}>Youtube</a>
      </p>
      <p>
        <a href={contacts.twitter}>Twitter</a>
      </p>
      <p>{contacts.email}</p>
      <p>{contacts.ph}</p>
    </div>
  );
};

export default Contact;

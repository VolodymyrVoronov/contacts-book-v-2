import React from "react";

import Animate from "react-smooth";

import { FcFolder } from "react-icons/fc";

import "./NoContacts.scss";

const NoContacts = (props) => {
  const { title, text } = props;

  return (
    <Animate to="1" from="0" attributeName="opacity">
      <div className="no-contacts">
        <h1 className="no-contacts__title">{title}</h1>
        <div className="no-contacts__icon">
          <FcFolder />
        </div>
        <p className="no-contacts__text">{text}</p>
      </div>
    </Animate>
  );
};

export default NoContacts;

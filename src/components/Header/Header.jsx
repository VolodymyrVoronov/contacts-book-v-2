import React from "react";

import { Link, useHistory } from "react-router-dom";

import Animate from "react-smooth";

import { FcContacts, FcRating, FcPlus } from "react-icons/fc";

import useStore from "./../../store/appStore";

import "./Header.scss";

const Header = () => {
  const { contacts, isEditModeActive } = useStore();
  let history = useHistory();

  React.useEffect(() => {
    if (!isEditModeActive) {
      if (!contacts.some((contact) => contact.favorite)) {
        history.push("/");
      }
    }
  });

  return (
    <header className="main-header">
      <Link to="/" className="main-header__logo-block">
        <h1 className="main-header__title">Contacts</h1>
        <div className="main-header__logo">
          <FcContacts />
        </div>
      </Link>

      <section className="main-header__btn-block btn-block">
        {contacts.length !== 0 &&
        contacts.some((contact) => contact.favorite) ? (
          <Animate to="1" from="0" attributeName="opacity">
            <Link
              to="/favorite"
              className="btn-block__btn btn-block__btn--favorite"
            >
              Favorite
              <span className="btn-block__btn-icon">
                <FcRating />
              </span>
            </Link>
          </Animate>
        ) : null}

        <Link to="/form" className="btn-block__btn btn-block__btn--new-contact">
          New contact
          <span className="btn-block__btn-icon">
            <FcPlus />
          </span>
        </Link>
      </section>
    </header>
  );
};

export default Header;

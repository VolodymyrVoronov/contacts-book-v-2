import React from "react";

import { useHistory } from "react-router-dom";

import { CSSTransition } from "react-transition-group";

import Animate from "react-smooth";

import {
  FcBusinessman,
  FcBusinesswoman,
  FcConferenceCall,
} from "react-icons/fc";
import { BsFillStarFill } from "react-icons/bs";
import {
  ImPhone,
  ImEnvelop,
  ImEarth,
  ImOffice,
  ImLocation,
  ImFileText,
  ImPencil,
  ImBin,
} from "react-icons/im";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

import "./Contact.scss";

const Contact = ({
  contact,
  addToFavorite,
  deleteContact,
  getContactToEdit,
  setEditMode,
}) => {
  const [showMoreInfo, setShowMoreInfo] = React.useState(false);
  const nodeRef = React.useRef(null);
  let history = useHistory();

  const onShowMoreBtnClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  const onFavoriteClick = (id) => {
    addToFavorite(id);
  };

  const onDeleteClick = (id) => {
    deleteContact(id);
  };

  const onEditClick = (id) => {
    getContactToEdit(id);
    setEditMode(true);
    history.push("/form");
  };

  const classesTransition = {
    enter: "enter",
    enterActive: "enter-active",
    exit: "exit",
    exitActive: "exit-active",
    exitDone: "exit-done",
  };

  const {
    id,
    firstName,
    secondName,
    phoneNumber,
    email,
    country,
    countryCode,
    cityName,
    address,
    houseNumber,
    gender,
    favorite,
    otherNotes,
  } = contact;

  return (
    <Animate to="1" from="0" attributeName="opacity">
      <section className="contact">
        <header className="contact__header header-contact">
          <span className="header-contact__icon">
            {(() => {
              if (gender === `maleGender`) {
                return <FcBusinessman />;
              }
              if (gender === `femaleGender`) {
                return <FcBusinesswoman />;
              }
              if (gender === `otherGender`) {
                return <FcConferenceCall />;
              }
              return <FcConferenceCall />;
            })()}
          </span>
          <div className="header-contact__text text-header">
            <p className="text-header__first-name">{firstName}</p>
            <p className="text-header__second-name">{secondName}</p>
          </div>
          <button
            onClick={() => onFavoriteClick(id)}
            className={`header-contact__favorite-btn ${
              favorite ? `header-contact__favorite-btn--favorite` : ``
            }`}
            type="button"
          >
            <BsFillStarFill />
          </button>
        </header>

        <div className="contact__body body-contact">
          <section className="body-contact__phone phone">
            <span className="phone__icon">
              <ImPhone />
            </span>
            <a
              className="phone__text phone__text--hover"
              href={`tel:${phoneNumber}`}
            >
              {phoneNumber}
            </a>
          </section>

          <section className="body-contact__email email">
            <span className="email__icon">
              <ImEnvelop />
            </span>
            <a
              className="email__text email__text--hover"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </section>

          <button
            onClick={onShowMoreBtnClick}
            className="body-contact__btn-more btn-more"
            type="button"
          >
            <p className="btn-more__text">More</p>
            <span className="btn-more__icon">
              {showMoreInfo ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
            </span>
          </button>

          <CSSTransition
            nodeRef={nodeRef}
            in={showMoreInfo}
            timeout={500}
            classNames={classesTransition}
            unmountOnExit
            mountOnEnter
          >
            <div ref={nodeRef}>
              <section className="body-contact__country country">
                <span className="country__icon">
                  <ImEarth />
                </span>
                <p className="country__text">
                  {countryCode.length !== 0 ? (
                    <img
                      className="country__flag"
                      src={
                        process.env.PUBLIC_URL +
                        `/countryFlags/${countryCode}.png`
                      }
                      alt={`Flag ${countryCode}`}
                    />
                  ) : null}

                  {country}
                </p>
              </section>

              {cityName.length !== 0 ? (
                <section className="body-contact__city city">
                  <span className="city__icon">
                    <ImOffice />
                  </span>
                  <p className="city__text">{cityName}</p>
                </section>
              ) : null}

              {address.length !== 0 ? (
                <section className="body-contact__address address">
                  <span className="address__icon">
                    <ImLocation />
                  </span>
                  <p className="address__text">{address}</p>
                  {houseNumber.length !== 0 ? (
                    <p className="address__text address__text--position">
                      &ndash; {houseNumber}
                    </p>
                  ) : null}
                </section>
              ) : null}

              {otherNotes.length !== 0 ? (
                <section className="body-contact__notes notes">
                  <span className="notes__icon">
                    <ImFileText />
                  </span>
                  <p className="notes__text">{otherNotes}</p>
                </section>
              ) : null}
            </div>
          </CSSTransition>
        </div>

        <footer className="contact__footer footer-contact">
          <section className="footer-contact__btns">
            <button
              onClick={() => onDeleteClick(id)}
              className="footer-contact__btn btn-footer btn-footer--delete"
              type="button"
            >
              <span className="btn-footer__icon">
                <ImBin />
              </span>
              <p className="btn-footer__text">Delete</p>
            </button>
            <button
              onClick={() => onEditClick(id)}
              className="footer-contact__btn btn-footer btn-footer--edit"
              type="button"
            >
              <span className="btn-footer__icon">
                <ImPencil />
              </span>
              <p className="btn-footer__text">Edit</p>
            </button>
          </section>
        </footer>
      </section>
    </Animate>
  );
};

export default Contact;

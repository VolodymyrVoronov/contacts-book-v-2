import React from "react";

import { Link, useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";

import Animate from "react-smooth";

import useStore from "./../../store/appStore";

import {
  FcBusinessman,
  FcBusinesswoman,
  FcConferenceCall,
} from "react-icons/fc";

import "./Form.scss";

const Form = () => {
  const {
    countriesList,
    addNewContact,
    editContact,
    contactToEdit,
    isEditModeActive,
    setEditMode,
  } = useStore();
  let history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    if (isEditModeActive) {
      editContact(data);
    } else {
      addNewContact(data);
    }

    history.push("/");
    setEditMode(false);
  };

  const onCancelClick = () => {
    setEditMode(false);
  };

  return (
    <Animate to="1" from="0" attributeName="opacity">
      <div className="form">
        <header className="form__header header-form">
          <p className="header-form__title">
            {isEditModeActive
              ? `Please edit the contact information`
              : `Please fill up the information`}
          </p>
        </header>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form__body body-form"
        >
          <div className="body-form__left-block">
            <section className="body-form__fields">
              <label htmlFor="firstName" className="body-form__field-title">
                First name:
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Volodymyr"
                name="firstName"
                className="body-form__field-input"
                defaultValue={
                  isEditModeActive ? contactToEdit[0].firstName : null
                }
                ref={register({
                  required: true,
                  minLength: 1,
                  maxLength: 25,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              <p className="body-form__error-block">
                {errors.firstName && "First name is required!"}
              </p>
            </section>

            <section className="body-form__fields">
              <label htmlFor="secondName" className="body-form__field-title">
                Second name:
              </label>
              <input
                id="secondName"
                type="text"
                placeholder="Kotov"
                name="secondName"
                className="body-form__field-input"
                defaultValue={
                  isEditModeActive ? contactToEdit[0].secondName : null
                }
                ref={register({
                  required: true,
                  minLength: 1,
                  maxLength: 25,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              <p className="body-form__error-block">
                {errors.secondName && "Second name is required!"}
              </p>
            </section>

            <section className="body-form__fields">
              <label htmlFor="phoneNumber" className="body-form__field-title">
                Phone number:
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="01513411231"
                name="phoneNumber"
                className="body-form__field-input"
                defaultValue={
                  isEditModeActive ? contactToEdit[0].phoneNumber : null
                }
                ref={register({
                  required: true,
                  minLength: 1,
                  maxLength: 12,
                })}
              />
              <p className="body-form__error-block">
                {errors.phoneNumber && "Phone number is required!"}
              </p>
            </section>

            <section className="body-form__fields">
              <label htmlFor="email" className="body-form__field-title">
                Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="kotov@mail.com"
                name="email"
                className="body-form__field-input"
                defaultValue={isEditModeActive ? contactToEdit[0].email : null}
                ref={register({
                  required: true,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              <p className="body-form__error-block">
                {errors.email && "Email is required!"}
              </p>
            </section>

            <section className="body-form__fields">
              <label htmlFor="country" className="body-form__field-title">
                Country:
              </label>
              <select
                id="country"
                name="country"
                className="body-form__field-input"
                ref={register({ required: true })}
              >
                {isEditModeActive ? null : <option value=""></option>}

                {isEditModeActive ? (
                  <option defaultValue={contactToEdit[0].country}>
                    {contactToEdit[0].country}
                  </option>
                ) : null}

                {countriesList.map((country) => {
                  const { code, name } = country;
                  return (
                    <option key={code} value={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
              <p className="body-form__error-block">
                {errors.country && "Country is required!"}
              </p>
            </section>

            <section className="body-form__fields">
              <label htmlFor="cityName" className="body-form__field-title">
                City:
              </label>
              <input
                id="cityName"
                type="text"
                placeholder="New York"
                name="cityName"
                className="body-form__field-input"
                ref={register}
                defaultValue={
                  isEditModeActive ? contactToEdit[0].cityName : null
                }
              />
            </section>

            <section className="body-form__fields">
              <label htmlFor="address" className="body-form__field-title">
                Address:
              </label>
              <div className="body-form__flex-container">
                <input
                  id="address"
                  type="text"
                  placeholder="56th Avenue"
                  name="address"
                  className="body-form__field-input body-form__field-input--street"
                  ref={register}
                  defaultValue={
                    isEditModeActive ? contactToEdit[0].address : null
                  }
                />
                <input
                  type="text"
                  placeholder="E5"
                  name="houseNumber"
                  className="body-form__field-input body-form__field-input--house"
                  ref={register}
                  defaultValue={
                    isEditModeActive ? contactToEdit[0].houseNumber : null
                  }
                />
              </div>
            </section>

            <section className="body-form__fields">
              <label htmlFor="otherNotes" className="body-form__field-title">
                Other:
              </label>
              <input
                id="otherNotes"
                type="text"
                placeholder="Something..."
                name="otherNotes"
                className="body-form__field-input"
                ref={register}
                defaultValue={
                  isEditModeActive ? contactToEdit[0].otherNotes : null
                }
              />
            </section>
          </div>

          <div className="body-form__right-block">
            <section className="body-form__fields">
              <p className="body-form__field-title">Group:</p>

              <div className="body-form__switch">
                <input
                  className="body-form__switch-input"
                  id="work"
                  name="work"
                  type="checkbox"
                  ref={register}
                  defaultChecked={
                    isEditModeActive ? contactToEdit[0].otherNotes : null
                  }
                />
                <label htmlFor="work" className="body-form__switch-label">
                  Work
                </label>
              </div>

              <div className="body-form__switch">
                <input
                  className="body-form__switch-input"
                  id="family"
                  name="family"
                  type="checkbox"
                  ref={register}
                  defaultChecked={
                    isEditModeActive ? contactToEdit[0].family : null
                  }
                />
                <label htmlFor="family" className="body-form__switch-label">
                  Family
                </label>
              </div>

              <div className="body-form__switch">
                <input
                  className="body-form__switch-input"
                  id="friends"
                  name="friends"
                  type="checkbox"
                  ref={register}
                  defaultChecked={
                    isEditModeActive ? contactToEdit[0].friends : null
                  }
                />
                <label htmlFor="friends" className="body-form__switch-label">
                  Friends
                </label>
              </div>

              <div className="body-form__switch">
                <input
                  className="body-form__switch-input"
                  id="other"
                  name="other"
                  type="checkbox"
                  ref={register}
                  defaultChecked={
                    isEditModeActive ? contactToEdit[0].other : null
                  }
                />
                <label htmlFor="other" className="body-form__switch-label">
                  Other
                </label>
              </div>
            </section>

            <br />

            <section className="body-form__fields body-form__fields--gender">
              <label htmlFor="maleGender" className="body-form__field-title">
                <FcBusinessman />
              </label>
              <input
                className="body-form__field-input"
                id="maleGender"
                type="radio"
                value="maleGender"
                name="gender"
                ref={register}
                defaultChecked={
                  isEditModeActive
                    ? contactToEdit[0].gender === `maleGender`
                    : null
                }
              />
            </section>

            <section className="body-form__fields body-form__fields--gender">
              <label htmlFor="femaleGender" className="body-form__field-title">
                <FcBusinesswoman />
              </label>
              <input
                className="body-form__field-input"
                id="femaleGender"
                type="radio"
                value="femaleGender"
                name="gender"
                ref={register}
                defaultChecked={
                  isEditModeActive
                    ? contactToEdit[0].gender === `femaleGender`
                    : null
                }
              />
            </section>

            <section className="body-form__fields body-form__fields--gender">
              <label htmlFor="otherGender" className="body-form__field-title">
                <FcConferenceCall />
              </label>
              <input
                className="body-form__field-input"
                id="otherGender"
                type="radio"
                value="otherGender"
                name="gender"
                ref={register}
                defaultChecked={
                  isEditModeActive
                    ? contactToEdit[0].gender === `otherGender`
                    : true
                }
              />
            </section>
          </div>

          <footer className="body-form__footer">
            <Link
              onClick={() => onCancelClick()}
              to="/"
              className="body-form__back-btn"
            >
              Cancel
            </Link>
            <button type="submit" className="body-form__save-btn">
              {isEditModeActive ? `Save` : `Add contact`}
            </button>
          </footer>
        </form>
      </div>
    </Animate>
  );
};

export default Form;

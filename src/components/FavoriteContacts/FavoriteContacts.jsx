import React from "react";

import Animate from "react-smooth";

import useStore from "./../../store/appStore";

import Contact from "./../Contact/Contact";

import "./FavoriteContacts.scss";

const FavoriteContacts = () => {
  const {
    contacts,
    addToFavorite,
    deleteContact,
    getContactToEdit,
    setEditMode,
  } = useStore();

  return (
    <Animate to="1" from="0" attributeName="opacity">
      <div className="favorite">
        {contacts
          .filter((contact) => contact.favorite)
          .map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
              addToFavorite={addToFavorite}
              deleteContact={deleteContact}
              getContactToEdit={getContactToEdit}
              setEditMode={setEditMode}
            />
          ))}
      </div>
    </Animate>
  );
};

export default FavoriteContacts;

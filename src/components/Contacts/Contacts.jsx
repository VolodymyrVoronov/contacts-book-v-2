import React from "react";

import useStore from "./../../store/appStore";

import Contact from "./../Contact/Contact";
import NoContacts from "./../NoContacts/NoContacts";

import "./Contacts.scss";

const Contacts = () => {
  const {
    contacts,
    addToFavorite,
    deleteContact,
    getContactToEdit,
    setEditMode,
    filterType,
  } = useStore();

  let filteredContacts = [];

  if (filterType === `All`) {
    filteredContacts = contacts.filter((contact) => contact.all);
  }
  if (filterType === `Work`) {
    filteredContacts = contacts.filter((contact) => contact.work);
  }
  if (filterType === `Family`) {
    filteredContacts = contacts.filter((contact) => contact.family);
  }
  if (filterType === `Friends`) {
    filteredContacts = contacts.filter((contact) => contact.friends);
  }
  if (filterType === `Other`) {
    filteredContacts = contacts.filter((contact) => contact.other);
  }

  return (
    <div className="contacts">
      {filteredContacts.length === 0 ? (
        <NoContacts title={`You haven't got any contacts in this group.`} />
      ) : null}
      {filteredContacts.map((contact) => (
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
  );
};

export default Contacts;

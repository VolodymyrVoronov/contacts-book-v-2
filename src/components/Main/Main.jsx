import React from "react";

import Animate from "react-smooth";

import useStore from "./../../store/appStore";

import Filter from "./../Filter/Filter";
import Contacts from "../Contacts/Contacts";
import NoContacts from "./../NoContacts/NoContacts";

import "./Main.scss";

const Main = () => {
  const { contacts } = useStore();
  return (
    <Animate to="1" from="0" attributeName="opacity">
      <main className="main-content">
        {contacts.length !== 0 ? (
          <Filter />
        ) : (
          <NoContacts
            title={`You haven't got any contacts yet.`}
            text={`Start creating new one by clicking "New contact".`}
          />
        )}
        {contacts.length !== 0 ? <Contacts /> : null}
      </main>
    </Animate>
  );
};

export default Main;

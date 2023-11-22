import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ContactModal } from "../../components/ContactModal";
import { AddContactForm } from "../../components/AddContactForm";

import { UserContext } from "../../providers/UserContext";
import { ContactContext } from "../../providers/ContactContext";
import { ContactList } from "../../components/ContactList";

export const HomePage = ({ setContactList }) => {
  const { contactList, openModal, closeModal, isModalOpen } = useContext(ContactContext)
  const { user, userLogout, getUser } = useContext(UserContext);

  return (
    <main>
      <header>
        <h1>Home Page</h1>

        <h2>{user.name}</h2>
        <button onClick={() => getUser()}>Edit User</button>
        <button onClick={openModal}>Add Contact</button>
        <button onClick={() => userLogout()}>Logout</button>
      </header>

      <ContactModal isOpen={isModalOpen} closeModal={closeModal}>
        <h2>Contact Form</h2>
        <AddContactForm setContactList={setContactList} />
      </ContactModal>


      <ContactList contactList={contactList} />

    </main>
  );
};

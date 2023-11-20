import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AddContactModal } from "../../components/AddContactModal";
import { AddContactForm } from "../../components/AddContactForm";
// import { ContactList } from '../../components/ContactList'

import { UserContext } from "../../providers/UserContext";

export const HomePage = ({ contactList, setContactList }) => {
  const { user, userLogout } = useContext(UserContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <h1>Home Page</h1>

      <h2>{user}</h2>
      <button onClick={openModal}>Add Contact</button>
      <button onClick={() => userLogout()}>Logout</button>

      <AddContactModal isOpen={isModalOpen} closeModal={closeModal}>
        <h2>Contact Form</h2>
        <AddContactForm setContactList={setContactList} />
      </AddContactModal>

      {/* <ContactList contactList={contactList} /> */}

      <p>
        <Link to="/home/contact">Albert Whintorp</Link>
      </p>
    </main>
  );
};

import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactContext } from "../../providers/ContactContext";
import { ContactModal } from "../../components/ContactModal";
import { UpdateContactForm } from "../../components/UpdateContactForm";

export const ContactPage = () => {
  const { id } = useParams();
  const { contactList, deleteContact, updateContact, closeModal, isModalOpen } =
    useContext(ContactContext);

  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const sortedContactList = contactList
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  
  return (
    <main>
      {sortedContactList.map((contact) => {
        if (contact.id === id) {
          return (
            <ul>
              <li key={contact.id}>
                <h1>{contact.name}</h1>
                <div>
                  <p>Name: {contact.name}</p>
                  <p>Email: {contact.email}</p>
                  <p>Telephone: {contact.telephone}</p>
                  <hr />

                  <button onClick={() => setIsDeleting(true)}>
                    Delete Contact
                  </button>

                  <button onClick={() => setIsUpdating(true)}>
                    Update Contact
                  </button>
                </div>
              </li>
              <ContactModal
                isOpen={isDeleting}
                closeModal={() => setIsDeleting(false)}
              >
                <p>Are you sure that you want to delete this contact?</p>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete Contact
                </button>
              </ContactModal>

              <ContactModal
                isOpen={isUpdating}
                closeModal={() => setIsUpdating(false)}
              >
                <p>Update Contact Details</p>
                <UpdateContactForm contact={contact} setIsUpdating={setIsUpdating}/>

              </ContactModal>
            </ul>
          );
        }
      })}

      <Link to="/home">Back</Link>
      <ContactModal isOpen={isModalOpen} closeModal={closeModal}></ContactModal>
    </main>
  );
};

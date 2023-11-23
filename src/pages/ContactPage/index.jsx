import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactContext } from "../../providers/ContactContext";
import { ContactModal } from "../../components/ContactModal";
import { UpdateContactForm } from "../../components/UpdateContactForm";

import {
  StyledButton,
  StyledConfirmModal,
  StyledContactDetails,
  StyledHeader,
  StyledIconDiv,
  StyledLabel,
  StyledParagraphOne,
  StyledPhrase,
  StyledSpan,
  StyledUserPanel,
} from "./style";
import {
  StyledBodyDiv,
  StyledDarkLogoImg,
  StyledHomeMain,
} from "../HomePage/style";

import logo_dark from "../../images/dark-logo.png";

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
    <ul>
      {sortedContactList.map((contact) => {
        if (contact.id === id) {
          return (
            <li key={contact.id}>
              <StyledBodyDiv>
                <StyledHeader>
                  <StyledUserPanel>
                    <h2>{contact.name}</h2>
                    <StyledIconDiv>
                      <div onClick={() => setIsUpdating(true)}>
                        <span className="material-symbols-outlined">Edit</span>
                      </div>
                      <Link to="/home">
                        <span className="material-symbols-outlined">
                          arrow_back_ios_new
                        </span>
                      </Link>
                    </StyledIconDiv>
                  </StyledUserPanel>
                </StyledHeader>

                <StyledSpan />

                <StyledHomeMain>
                  <StyledContactDetails>
                    <span>
                      <StyledLabel>Name:</StyledLabel>
                      <StyledParagraphOne fontSize={"lg"}>
                        {contact.name}
                      </StyledParagraphOne>
                    </span>
                    <span>
                      <StyledLabel>Email:</StyledLabel>
                      <StyledParagraphOne fontSize={"md"}>
                        {contact.email}
                      </StyledParagraphOne>
                    </span>
                    <span>
                      <StyledLabel>Telephone:</StyledLabel>
                      <StyledParagraphOne fontSize={"md"}>
                        {contact.telephone}
                      </StyledParagraphOne>
                    </span>
                    <span>
                      <StyledLabel>Registered Date:</StyledLabel>
                      <StyledParagraphOne fontSize={"sm"}>
                        {contact.createdAt}
                      </StyledParagraphOne>
                    </span>

                    <StyledButton onClick={() => setIsDeleting(true)}>
                      Delete Contact
                    </StyledButton>
                  </StyledContactDetails>
                </StyledHomeMain>
              </StyledBodyDiv>

              <ContactModal
                isOpen={isDeleting}
                closeModal={() => setIsDeleting(false)}
              >
                <StyledConfirmModal>
                  <StyledPhrase>
                    Are you sure that you want to delete this contact?
                  </StyledPhrase>
                  <StyledButton onClick={() => deleteContact(contact.id)}>
                    Delete Contact
                  </StyledButton>
                </StyledConfirmModal>
              </ContactModal>

              <ContactModal
                isOpen={isUpdating}
                closeModal={() => setIsUpdating(false)}
              >
                <StyledDarkLogoImg src={logo_dark} alt="Logo Connectfy Dark" />
                <UpdateContactForm
                  contact={contact}
                  setIsUpdating={setIsUpdating}
                />
              </ContactModal>
            </li>
          );
        }
      })}

      <ContactModal isOpen={isModalOpen} closeModal={closeModal}></ContactModal>
    </ul>
  );
};

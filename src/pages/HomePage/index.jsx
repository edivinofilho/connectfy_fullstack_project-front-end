import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ContactModal } from "../../components/ContactModal";
import { AddContactForm } from "../../components/AddContactForm";

import { UserContext } from "../../providers/UserContext";
import { ContactContext } from "../../providers/ContactContext";
import { ContactList } from "../../components/ContactList";

import image from "../../images/alien-oops.png";
import logo from "../../images/light-logo.png";
import {
  StyledBodyDiv,
  StyledNoContactsDiv,
  StyledHeader,
  StyledHomeMain,
  StyledIconDiv,
  StyledLogoImg,
  StyledMainImg,
  StyledUserPanel,
  StyledSearchPanel,
  StyledSpan,
} from "./style";
import { StyledParagraph } from "../../styles/typography";
import { Input } from "../../components/Input";

export const HomePage = ({ setContactList }) => {
  const { contactList, openModal, closeModal, isModalOpen } =
    useContext(ContactContext);
  const { user, userLogout, getUser } = useContext(UserContext);
  const [showNoContacts, setShowNoContacts] = useState(false);

  useEffect(() => {
    if (contactList.length === 0) {
      setTimeout(() => {
        if(contactList.length === 0) {
          setShowNoContacts(true)
        }
  
      }, 1 * 2000);
    }
  }, [contactList]);

  return (
    <StyledBodyDiv>
      <StyledHeader>
        <StyledUserPanel>
          <h2>{user.name}</h2>
          <StyledIconDiv>
            <button onClick={() => getUser(user.id)}>Edit User</button>
            <button onClick={openModal}>Add Contact</button>
            <button onClick={() => userLogout()}>Logout</button>
          </StyledIconDiv>
        </StyledUserPanel>
        <StyledSearchPanel>
          <Input type="text" placeholder="Search Contact" />
          <button>Click</button>
        </StyledSearchPanel>
      </StyledHeader>

      <StyledSpan />

      <StyledHomeMain>
        {contactList.length !== 0 ? <ContactList contactList={contactList} /> : showNoContacts && 
          <StyledNoContactsDiv>
            <StyledLogoImg src={logo} alt="Logo Connectfy Light" />
            <StyledMainImg src={image} alt="Sad emoji" />

            <StyledParagraph fontSize={"lg"}>
              No contacts yet? No worries, the world awaits
            </StyledParagraph>
          </StyledNoContactsDiv>
        }
      </StyledHomeMain>

      <ContactModal isOpen={isModalOpen} closeModal={closeModal}>
        <h2>Contact Form</h2>
        <AddContactForm setContactList={setContactList} />
      </ContactModal>
    </StyledBodyDiv>
  );
};

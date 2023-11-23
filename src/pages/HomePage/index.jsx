import { useContext, useEffect, useState } from "react";

import { ContactModal } from "../../components/ContactModal";
import { AddContactForm } from "../../components/AddContactForm";

import { UserContext } from "../../providers/UserContext";
import { ContactContext } from "../../providers/ContactContext";
import { ContactList } from "../../components/ContactList";

import image from "../../images/alien-oops.png";
import logo from "../../images/light-logo.png";
import logo_dark from "../../images/dark-logo.png";

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
  StyledDarkLogoImg,
} from "./style";
import { StyledParagraph } from "../../styles/typography";
import { Input } from "../../components/Input";

export const HomePage = ({ setContactList }) => {
  const { contactList, openModal, closeModal, isModalOpen } =
    useContext(ContactContext);
  const { user, userLogout, getUser } = useContext(UserContext);
  const [showNoContacts, setShowNoContacts] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (contactList.length === 0) {
      setTimeout(() => {
        if (contactList.length === 0) {
          setShowNoContacts(true);
        }
      }, 2 * 1000);
    }
  }, [contactList]);

  const filteredContacts = contactList.filter((contact) => {
    return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleClear = () => {
    setSearchTerm("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchTerm("");
  };

  return (
    <StyledBodyDiv>
      <StyledHeader>
        <StyledUserPanel>
          <h2>{user.name}</h2>
          <StyledIconDiv>
            <div onClick={() => getUser(user.id)}>
              <span className="material-symbols-outlined">Edit</span>
            </div>

            <div onClick={openModal}>
              <span className="material-symbols-outlined">Add</span>
            </div>

            <div onClick={() => userLogout()}>
              <span className="material-symbols-outlined">Logout</span>
            </div>
          </StyledIconDiv>
        </StyledUserPanel>
        <StyledSearchPanel>
          <Input
            type="text"
            placeholder="Search Contact"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </StyledSearchPanel>
      </StyledHeader>

      <StyledSpan />

      <StyledHomeMain>
        {contactList.length !== 0 ? (
          <ContactList contactList={filteredContacts} />
        ) : (
          showNoContacts && (
            <StyledNoContactsDiv>
              <StyledLogoImg src={logo} alt="Logo Connectfy Light" />
              <StyledMainImg src={image} alt="Sad emoji" />

              <StyledParagraph fontSize={"lg"}>
                No contacts yet? No worries, the world awaits
              </StyledParagraph>
            </StyledNoContactsDiv>
          )
        )}
      </StyledHomeMain>

      <ContactModal isOpen={isModalOpen} closeModal={closeModal}>
        <StyledDarkLogoImg src={logo_dark} alt="Logo Connectfy Dark" />
        <AddContactForm setContactList={setContactList} />
      </ContactModal>
    </StyledBodyDiv>
  );
};

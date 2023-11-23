import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { ContactModal } from "../../components/ContactModal";
import { UpdateUserForm } from "../../components/UpdateUserForm";
import { ContactContext } from "../../providers/ContactContext";

import {
  StyledBodyDiv,
  StyledDarkLogoImg,
  StyledHomeMain,
  StyledIconDiv,
  StyledUserPanel,
} from "../HomePage/style";
import logo_dark from "../../images/dark-logo.png";
import {
  StyledButton,
  StyledContactDetails,
  StyledLabel,
  StyledParagraphOne,
  StyledSpan,
  StyledHeader,
  StyledConfirmModal,
  StyledPhrase,
} from "../ContactPage/style";

export const UserPage = () => {
  const { user, deleteUser, updateUser } = useContext(UserContext);
  const { closeModal, isModalOpen } = useContext(ContactContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  return (
    <>
      <ul>
        <StyledBodyDiv>
          <StyledHeader>
            <StyledUserPanel>
              <h2>{user.name}</h2>
              <StyledIconDiv>
                <div onClick={() => setIsUpdating(true)}>
                  <span class="material-symbols-outlined">Edit</span>
                </div>

                <Link to="/home">
                  <span class="material-symbols-outlined">
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
                  {user.name}
                </StyledParagraphOne>
              </span>
              <span>
                <StyledLabel>Email:</StyledLabel>
                <StyledParagraphOne fontSize={"md"}>
                  {user.email}
                </StyledParagraphOne>
              </span>
              <span>
                <StyledLabel>Telephone:</StyledLabel>
                <StyledParagraphOne fontSize={"md"}>
                  {user.telephone}
                </StyledParagraphOne>
              </span>
              <span>
                <StyledLabel>Registered Date:</StyledLabel>
                <StyledParagraphOne fontSize={"sm"}>
                  {user.createdAt}
                </StyledParagraphOne>
              </span>

              <StyledButton onClick={() => setIsDeleting(true)}>
                Delete Account
              </StyledButton>
            </StyledContactDetails>
          </StyledHomeMain>
        </StyledBodyDiv>
      </ul>

      <ContactModal isOpen={isDeleting} closeModal={() => setIsDeleting(false)}>
        <StyledConfirmModal>
          <StyledPhrase>
            Are you sure that you want to delete your account?
          </StyledPhrase>
          <StyledButton onClick={() => deleteUser(user.id)}>
            Delete Contact
          </StyledButton>
        </StyledConfirmModal>
      </ContactModal>

      <ContactModal isOpen={isUpdating} closeModal={() => setIsUpdating(false)}>
        <StyledDarkLogoImg src={logo_dark} alt="Logo Connectfy Dark" />

        <UpdateUserForm user={user} setIsUpdating={setIsUpdating} />
      </ContactModal>

      <ContactModal isOpen={isModalOpen} closeModal={closeModal}></ContactModal>
    </>
  );
};

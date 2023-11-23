import { StyledModal, StyledModalContainer } from "./style";

export const ContactModal = ({ isOpen, closeModal, children }) => {
  return (
    <StyledModalContainer
      style={{
        display: isOpen ? "block" : "none",
      }}
    >
      <StyledModal>
        {children}
        <button onClick={closeModal}>Close</button>
      </StyledModal>
    </StyledModalContainer>
  );
};

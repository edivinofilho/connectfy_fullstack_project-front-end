import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-text-primary);
  padding: 20px;
  border-radius: 8px;

  width: 60%;
  max-width: 35rem;

  display: flex;

  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

import styled from "styled-components";

export const StyledContactButton = styled.div`
  text-align: center;
  width: 9.375rem;
  padding: 0.2rem;
  background-color: var(--color-primary);
  border-radius: 1.5rem;
  transition: 0.5s;

  button {
    font-size: 1rem;
    color: var(--color-text-button);
    width: 100%;
    padding: 15px;
    border-radius: 1.5rem;
  }

  &:hover {
    background-color: var(--color-text-primary);
  }
`;

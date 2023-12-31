import styled from "styled-components";

export const StyledButton = styled.div`
  text-align: center;
  width: 9.375rem;
  padding: 0.2rem;
  background-color: var(--color-text-primary);
  border-radius: 1.5rem;
  transition: 0.5s;

  button {
    width: 100%;
    padding: 15px;
    font-size: 0.875rem;
    color: #ffffff;
    border-radius: 1.5rem;
  }

  &:hover {
    background-color: var(--color-primary);
  }
`;

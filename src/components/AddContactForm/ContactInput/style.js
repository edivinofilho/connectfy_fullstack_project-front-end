import styled from "styled-components";

export const StyledContactInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  background-color: #545454;

  > input {
    padding: 0.8rem;

    background-color: #ffffff;
    font-size: 1.2rem;
    border-radius: 1.5rem;

    margin-bottom: 1rem;

    &:focus {
      outline: 2px solid var(--color-text-secondary);
    }
  }

  > label {
    margin-bottom: 0.375rem;
    font-size: 1.1rem;

    color: var(--color-primary);

    background-color: #545454;

    @media (max-width: 321px) {
      font-size: 0.9rem;
    }
  }
`;

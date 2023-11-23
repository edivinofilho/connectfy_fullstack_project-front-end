import styled, { css } from "styled-components";

export const StyledHeader = styled.div`
  width: 90%;
  max-width: 49rem;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
`;

export const StyledUserPanel = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;

  > h2 {
    color: var(--color-primary);
    font-size: 1.9rem;
    font-weight: 400;
  }
  @media (max-width: 281px) {
    flex-direction: column;
    gap: 1rem;

    > h2 {
      font-size: 1.875rem;
    }
  }
`;

export const StyledIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const StyledSpan = styled.span`
  width: 100%;
  border-bottom: 3px solid var(--color-text-button);
`;

export const StyledContactDetails = styled.div`
  width: 80%;
  max-width: 44rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const StyledLabel = styled.p`
  color: var(--color-primary);
  font-size: 1rem;
  padding-bottom: 10px;
`;

export const StyledParagraph = css`
  color: var(--color-text-primary);
  font-family: var(--font-primary);
  line-height: 1.2;

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 3rem;
          font-weight: 700;
        `;
      case "md":
        return css`
          font-size: 1.7rem;
        `;
      case "sm":
        return css`
          font-size: 0.9rem;
        `;
    }
  }}
`;

export const StyledParagraphOne = styled.p`
  ${StyledParagraph}
`;

export const StyledParagraphTwo = styled.p`
  ${StyledParagraph}
`;
export const StyledParagraphThree = styled.p`
  ${StyledParagraph}
`;

export const StyledButton = styled.button`
  text-align: center;
  width: 9.375rem;
  padding: 1rem;
  background-color: var(--color-primary);
  border-radius: 1.5rem;
  transition: 0.5s;
  color: var(--color-text-button);
  font-size: 1rem;

  &:hover {
    background-color: var(--color-text-primary);
  }
`;

export const StyledConfirmModal = styled.div`
  background-color: var(--color-text-primary);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 2rem;

  padding: 2rem 0;
`;

export const StyledPhrase = styled.p`
  color: var(--color-text-button);
  font-size: 1.2rem;

  background-color: var(--color-text-primary);
`;

import styled from "styled-components";

export const StyledBodyDiv = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.3rem;

  @media (max-width: 281px) {
    gap: 3rem;
  }
`;

export const StyledHomeMain = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 5rem;

  padding-top: 5rem;

`;

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 55rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledUserPanel = styled.div`
  width: 95%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;

  > h2 {
    color: var(--color-primary);
    font-size: 2.5rem;
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

export const StyledSearchPanel = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > button {
    position: absolute;
    right: 1.5625rem;
    top: 1.1rem;
  }
`;

export const StyledNoContactsDiv = styled.div`
  max-width: 55rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;

  gap: 1.5rem;

  width: 100%;
`;

export const StyledMainImg = styled.img`
  max-width: 20rem;
  width: 30%;

  @media (max-width: 278px) {
    width: 80%;
  }
`;

export const StyledLogoImg = styled.img`
  max-width: 10rem;
  width: 15%;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 278px) {
    position: relative;
    width: 40%;
  }
`;

export const StyledSpan = styled.span`
    width: 100%;
    border-bottom: 3px solid var(--color-text-button);
`
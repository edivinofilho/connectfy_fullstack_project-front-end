import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 2rem;
  gap: 4.2rem;

  @media (max-width: 281px) {
    gap: 3rem;
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);

  > h1 {
    font-size: 3.4375rem;
    font-weight: 400;
  }
  @media (max-width: 281px) {
    flex-direction: column;

    > h1 {
      font-size: 1.875rem;
    }
  }
`;

export const StyledImg = styled.img`
  max-width: 10rem;
  width: 20%;

  @media (max-width: 278px) {
    width: 40%;
  }
`;

import styled from "styled-components";

export const StyledContactCardData = styled.li`
  width: 99%;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid transparent;

  margin-bottom: 10px;

  > a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h3 {
      font-weight: 400;
    }
  }

  &:hover {
    border-bottom: 2px solid var(--color-text-button);
  }
`;

export const StyledContactCardContainer = styled.div`
  width: 80%;

  display: flex;
  align-items: le;
  justify-content: center;
  flex-direction: column;

  position: relative;
`;

export const StyledIndex = styled.h3`
  color: var(--color-primary);
  font-size: 1.875rem;
  font-weight: 400;

  padding: 10px 0;
`;

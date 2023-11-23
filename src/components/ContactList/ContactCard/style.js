import styled from "styled-components";

export const StyledContactCard = styled.li`
  width: 93%;
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


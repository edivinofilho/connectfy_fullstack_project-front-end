import styled from "styled-components";

export const StyledButton = styled.button`
    text-align: center;
    width: 9.375rem;
    padding: 1rem;
    background-color: var(--color-text-primary);
    border-radius: 1.5rem;
    transition: 0.5s;

    button {
        font-size: .875rem;
        color: #FFFFFF;
    }

    &:hover {
        background-color: var(--color-primary);
    }

`
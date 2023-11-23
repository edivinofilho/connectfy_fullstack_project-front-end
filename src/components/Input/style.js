import styled from "styled-components";

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 97%;

    > input {
        
        padding: 0.8rem;

        background-color: #FFFFFF;
        font-size: 1.2rem;
        border-radius: 1.5rem;
    
        margin-bottom: 1rem;

        &:focus {
            outline: 2px solid var(--color-text-secondary)
        }
    }

    > label {
        margin-bottom: .375rem;
        font-size: 1.1rem;
        
        color: var(--color-primary)
    }

`
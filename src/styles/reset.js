import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
    *{
        box-sizing: 0;
        padding: 0;
        margin: 0;
        background-color: #D9D9D9;
        font-family: var(--font-primary);
    }

    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    a {
        text-decoration: none;
        color: unset;
    }

    user-select, ol {
        list-style: none;
    }

    input {
        border-radius: 7px;
        border: none;
    }

    ul, li {
        list-style: none;
    }

    img {
        max-width: 100%;
    }
`;

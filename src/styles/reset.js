import { createGlobalStyle } from 'styled-components'

export const ResetStyle = createGlobalStyle`
    *{
        box-sizing: 0;
        padding: 0;
        margin: 0;
    }

    button {
        cursor: pointer;
        background: transparent;
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
        border-radius: 0;
        border: none;
        background: none;
    }

    img {
        max-width: 100%;
    }
`
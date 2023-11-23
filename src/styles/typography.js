import styled, { css } from 'styled-components'

export const TitleStyles = css`
    font-family: var(--font-primary);
    color: var(--color-primary);
    line-height: 1.6;
    font-weight: 700;

    ${({fontSize}) => {
        switch(fontSize){
            case 'lg':
                return css`
                    font-size: 2.25rem;
                `
            case 'md': 
                return css`
                    font-size: 1rem;
                `
            case 'sm':
                return css`
                    font-size: 0.5rem;
                `
        }
    }    
    }
`

export const StyledTitleOne = styled.h1`
    ${ TitleStyles }
`

export const StyledTitleTwo = styled.h2`
    ${ TitleStyles }
`

export const StyledTitleThree = styled.h3`
    ${ TitleStyles }
`

export const StyledParagraph = styled.p`
    font-family: var(--font-primary);
    color: var(--color-text-secondary);
    line-height: 1.6;
    font-weight: 400;
    transition: 0.5s;

    ${({fontSize}) => {
        switch(fontSize){
            case 'lg':
                return css`
                    font-size: 1rem;
                `
            case 'md': 
                return css`
                    font-size: .75rem;
                `
            case 'sm':
                return css`
                    font-size: 0.5rem;
                `
        }
    } 
}

&:hover {
    color:var(--color-primary)
}
`
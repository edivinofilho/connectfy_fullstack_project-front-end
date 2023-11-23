import { forwardRef } from 'react'
import { StyledButton } from './style'

export const Button = forwardRef(({text, ...rest}, ref) => {
  return (
    <StyledButton>
        <button ref={ref} {...rest}>{text}</button>
    </StyledButton>
  )
})
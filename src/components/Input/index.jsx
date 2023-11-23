import { forwardRef } from 'react'
import { StyledInput } from './style'

export const Input = forwardRef(({label, error, ...rest}, ref) => {
  return (
    <StyledInput>
        {label ? <label>{label}</label> : null}
        <input ref={ref} {...rest}/>
        {error ?  <p>{error.message}</p> : null}
    </StyledInput>
  )
})
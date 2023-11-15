import { forwardRef } from 'react'

// import { StyledInput } from './styles'

export const Input = forwardRef(({label, error, ...rest}, ref) => {
  return (
    <div>
        {label ? <label>{label}</label> : null}
        <input ref={ref} {...rest}/>
        {error ?  <p>{error.message}</p> : null}
    </div>
  )
})
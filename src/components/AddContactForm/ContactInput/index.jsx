import { forwardRef } from "react";
import { StyledContactInput } from "./style";

export const ContactInput = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <StyledContactInput>
      {label ? <label>{label}</label> : null}
      <input ref={ref} {...rest} />
      {error ? <p>{error.message}</p> : null}
    </StyledContactInput>
  );
});

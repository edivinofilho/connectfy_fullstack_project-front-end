import { forwardRef } from "react";
import { StyledContactButton } from "./style";

export const ContactButton = forwardRef(({ text, ...rest }, ref) => {
  return (
    <StyledContactButton>
      <button ref={ref} {...rest}>
        {text}
      </button>
    </StyledContactButton>
  );
});

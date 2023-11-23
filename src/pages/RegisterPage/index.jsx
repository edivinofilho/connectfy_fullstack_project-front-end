import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm";
import { StyledParagraph } from "../../styles/typography";
import { StyledHeader, StyledImg, StyledMain } from "../RegisterPage/style";
import image from "../../images/light-logo.png";

export const RegisterPage = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledImg src={image} alt="Logo Connectfy Light" />
        <h1>Contacts</h1>
      </StyledHeader>

      <RegisterForm />

      <StyledParagraph fontSize={"lg"}>
        <Link to="/">Already Registered? Login here ;)</Link>
      </StyledParagraph>
    </StyledMain>
  );
};

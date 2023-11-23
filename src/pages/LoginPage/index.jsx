import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm";
import { StyledParagraph } from "../../styles/typography";
import { StyledHeader, StyledImg, StyledMain } from "./style";
import image from "../../images/light-logo.png"


export const LoginPage = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledImg src={image} alt="Logo Connectfy Light"/>
        <h1>Contacts</h1>
      </StyledHeader>

      <LoginForm />
      
      <StyledParagraph fontSize={"lg"}>
        <Link to="/register">What? Not registered yet? Click here ;)</Link>
      </StyledParagraph>
    </StyledMain>
  );
};

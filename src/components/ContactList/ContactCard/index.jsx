import { Link } from "react-router-dom";
import { StyledContactCardData } from "./style";

export const ContactCard = ({ contact }) => {
  return (
    <StyledContactCardData>
      <Link to={`/home/contact/${contact.id}`}>
        <h3>{contact.name}</h3>
        <p>{contact.telephone}</p>
      </Link>
    </StyledContactCardData>
  );
};

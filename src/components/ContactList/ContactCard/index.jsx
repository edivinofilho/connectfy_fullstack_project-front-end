import { Link } from "react-router-dom";
import { StyledContactCard } from "./style";

export const ContactCard = ({ contact }) => {
  return (
    <StyledContactCard>
      <Link to={`/home/contact/${contact.id}`}>

          <h3>{contact.name}</h3>
          <p>{contact.telephone}</p>
      </Link>
    </StyledContactCard>
  );
};

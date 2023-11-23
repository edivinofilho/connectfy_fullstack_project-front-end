import { ContactCard } from "./ContactCard";
import { StyledContactCardContainer, StyledIndex } from "./ContactCard/style";
import { StyledContactList } from "./style";

export const ContactList = ({ contactList }) => {
  const sortedContactList = contactList
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <StyledContactList>
      {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
        const contactsForLetter = sortedContactList.filter((contact) => {
          return contact.name[0].toUpperCase() === letter;
        });

        if (contactsForLetter.length > 0) {
          return (
            <StyledContactCardContainer key={letter}>
              <StyledIndex>{letter}</StyledIndex>

              {contactsForLetter.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
              ))}
            </StyledContactCardContainer>
          );
        }

        return null;
      })}
    </StyledContactList>
  );
};

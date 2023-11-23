import { ContactCard } from "./ContactCard"
import { StyledContactList } from "./style";

export const ContactList = ({contactList}) => {
    const sortedContactList = contactList.slice().sort((a, b) => a.name.localeCompare(b.name));

    return(
        <StyledContactList>

{
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => {

          const contactsForLetter = sortedContactList.filter(contact => {
            return contact.name[0].toUpperCase() === letter;  
          });
          
          if(contactsForLetter.length > 0) {
            return (
              <div key={letter}>
                <h3>{letter}</h3>
                
                {contactsForLetter.map(contact => (
                  <ContactCard 
                    key={contact.id}
                    contact={contact}
                  />
                ))}
                
              </div>
            )
          }

          return null;

        })
      }

            {/* {sortedContactList.map(contact => (
                <ContactCard key={contact.id} contact={contact}/>
            ))} */}
        </StyledContactList>
    )
}
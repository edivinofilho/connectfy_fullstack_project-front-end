import { ContactCard } from "./ContactCard"

export const ContactList = ({contactList}) => {
    return(
        <ul>
            {contactList.map(contact => (
                <ContactCard key={contact.id} contact={contact}/>
            ))}
        </ul>
    )
}
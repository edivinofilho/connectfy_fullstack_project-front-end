import { ContactCard } from "./ContactCard"

export const ContactList = ({contactList}) => {
    const sortedContactList = contactList.slice().sort((a, b) => a.name.localeCompare(b.name));

    return(
        <ul>
            {sortedContactList.map(contact => (
                <ContactCard key={contact.id} contact={contact}/>
            ))}
        </ul>
    )
}
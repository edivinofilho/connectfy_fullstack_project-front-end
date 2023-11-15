export const ContactCard = ({contact}) => {
    return (
        <li>
            <h3>{contact.name}</h3>
            <p>{contact.telephone}</p>
        </li>
    )
}
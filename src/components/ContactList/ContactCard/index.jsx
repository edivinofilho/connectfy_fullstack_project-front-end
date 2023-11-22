import { Link } from "react-router-dom"

export const ContactCard = ({contact}) => {
    console.log(contact)
    return (
        <li>
            <Link to={`/home/contact/${contact.id}`}>
                <h3>{contact.name}</h3>
                <p>{contact.telephone}</p>
            </Link>
        </li>
    )
}
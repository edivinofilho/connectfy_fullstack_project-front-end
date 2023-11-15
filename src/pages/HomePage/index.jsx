import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { AddContactModal } from "../../components/AddContactModal"
import { AddContactForm } from '../../components/AddContactForm'
import { ContactList } from '../../components/ContactList'

export const HomePage = ({contactList, setContactList}) => {
    
    const {} = useContext

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
    setIsModalOpen(true);
    }

    const closeModal = () => {
    setIsModalOpen(false);
    }

    return (
        <div>
            <h1>Home Page</h1>
            
            <button onClick={openModal}>Add Contact</button>

            <Link to='/'>Logout</Link>
            
            <AddContactModal isOpen={isModalOpen}closeModal={closeModal}>
                <h2>Contact Form</h2>
                <AddContactForm setContactList={setContactList}/>

            </AddContactModal>

            <ContactList contactList={contactList} />

            <p><Link to='/home/contact'>Albert Whintorp</Link></p>
        </div>
    )
}
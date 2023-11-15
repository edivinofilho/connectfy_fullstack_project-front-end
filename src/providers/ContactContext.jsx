import { createContext, useEffect } from 'react'

export const ContactContext = createContext({})

export const ContactProvider = ({children}) => {
    const [contactList, setContactList] = ([])

    useEffect(() => {
        const loadContacts = async () => {
            try {
                const { data } = await api.get('/contacts')
                setContactList(data)
            } catch (error) {
                console.log(error)                
            }
        }
        loadContacts()
    }, [])

    const createContact = async (formData) => {
        try {
            const { data } = await api.post('/contact', formData)
            
            setContactList((contactList) => [...contactList, data])
            // close modal
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <ContactContext.Provider value={{contactList, createContact}}>
            { children }
        </ContactContext.Provider>
    )
}
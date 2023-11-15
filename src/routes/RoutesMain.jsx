import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { HomePage } from '../pages/HomePage'
import { ContactPage } from '../pages/ContactPage'
import { useEffect, useState } from 'react'

export const RoutesMain = () => {
    const [contactList, setContactList] = useState([])

    useEffect(() => {
        const loadContacts = async () => {
            try {
                // const { data } = await api.get('/contacts')
                // setContactList(data)
                console.log('contatos listados')
            } catch (error) {
                console.log(error)
            }
        }
        loadContacts()
    }, [])

    return (
        <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/home' element={<HomePage contactList={contactList} setContactList={setContactList}/>}/>
            <Route path='/home/contact' element={<ContactPage />}/>
        </Routes>
    )
} 
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { HomePage } from '../pages/HomePage'
import { ContactPage } from '../pages/ContactPage'

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/home' element={<HomePage />}/>
            <Route path='/home/contact' element={<ContactPage />}/>
        </Routes>
    )
} 
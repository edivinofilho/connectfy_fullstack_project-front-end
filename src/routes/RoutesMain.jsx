import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { useEffect, useState } from "react";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { PublicRoutes } from "../components/PublicRoutes";

export const RoutesMain = () => {
  // const [contactList, setContactList] = useState([])

  // useEffect(() => {
  //     const loadContacts = async () => {
  //         try {
  //             const { data } = await api.get('/contacts')
  //             setContactList(data)
  //             console.log('contatos listados')
  //         } catch (error) {
  //             console.log(error)
  //         }
  //     }
  //     loadContacts()
  // }, [])

  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};
// <Route path='/home' element={<HomePage contactList={contactList} setContactList={setContactList}/>}/>

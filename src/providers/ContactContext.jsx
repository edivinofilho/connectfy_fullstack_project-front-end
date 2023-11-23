import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const loadContacstData = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContactList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadContacstData();
  }, []);

  const navigate = useNavigate();

  const createContact = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContactList((contactList) => [...contactList, data]);
      setIsModalOpen(false);

      toast.success('Nice work! New contact added', {
        transition: Slide,
        autoClose: 2000
      }) 

    } catch (error) {
      toast.error('Ooops, something went wrong!', {
        transition: Slide,
        autoClose: 2000
      }) 
    }
  };

  const deleteContact = async (contactId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContactList((contactList) =>
        contactList.filter((contact) => contact.id !== contactId)
      );


      navigate("/home");

      toast.success('Contact deleted.', {
        transition: Slide,
        autoClose: 2000
      }) 

    } catch (error) {
       toast.error('Ooops, something went wrong!', {
        transition: Slide,
        autoClose: 2000
      }) 
    }
  };

  const updateContact = async (contactId, formData) => {
    setIsModalOpen(true)
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.patch(`/contacts/${contactId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      setContactList((contactList) => contactList.map(contact => (contact.id === contactId ? data : contact)));

      setIsModalOpen(true);
      
      toast.success('Contact details updated.', {
        transition: Slide,
        autoClose: 2000
      }) 
      
    } catch (error) {
      toast.error('Ooops, something went wrong!', {
        transition: Slide,
        autoClose: 2000
      }) 
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ContactContext.Provider
      value={{
        loading,
        contactList,
        createContact,
        deleteContact,
        updateContact,
        openModal,
        closeModal,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

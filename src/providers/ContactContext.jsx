import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

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
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
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
      console.log(isModalOpen)
      setContactList((contactList) => contactList.map(contact => (contact.id === contactId ? data : contact)));

      setIsModalOpen(true);
      console.log(isModalOpen)
      
    } catch (error) {
      console.log(error);
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

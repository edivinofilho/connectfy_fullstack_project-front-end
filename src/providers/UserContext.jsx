import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userApiData, setUserApiData] = useState(null)
  const [loading, setLoading ] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentPath = window.location.pathname; 
  
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")
    const id = localStorage.getItem("@USERID")

    const loadUser = async() => {
      try {
        setLoading(true)
        const {data} = await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setUser(data)
        navigate(currentPath)
      } catch (error) {
        console.log(error)
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setUser(null)

      } finally {
        setLoading(false)
      }
    }
    
    if(token && id){
      loadUser();
    }
  }, [])

  const navigate = useNavigate();

  const userRegister = async (formData) => {
    try {
      await api.post("/users", formData);
      navigate("/");

      toast.success('Nice! Account created, just login now ;)', {
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

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@TOKEN", data.token.token)
      localStorage.setItem("@USERID", data.token.userData.id)
      setUser(data.token.userData)

      setUserApiData(data)

      toast.success('Cool! Logging you in', {
        transition: Slide,
        autoClose: 2000
      })  
    
      navigate("/home")

    } catch (error) {
      toast.error('Ooops, something went wrong!', {
        transition: Slide,
        autoClose: 2000
      }) 
      

      localStorage.removeItem("@TOKEN")
      localStorage.removeItem("@USERID")
      setUser(null)
      setUserApiData(null)
    }
  };

  const userLogout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setUser(null)
        setUserApiData(null)
    
        navigate("/")

        toast.success('See you later!', {
          transition: Slide,
          autoClose: 2000
        }) 
  }

  const getUser = async (userId) => {
    try {
      navigate("/home")
      if(!userId){
        toast.error('Ooopss!, try again later', {
          transition: Slide,
          autoClose: 2000
        })

      } else {
        navigate(`/user/${userId}`)

      }
    } catch (error) {
      console.log(error)
    }
  }

  const updateUser = async (userId, formData) => {
    setIsModalOpen(true)
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.patch(`/users/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(data)
      
      setIsModalOpen(true);

      toast.success('Data updated successfully', {
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

  const deleteUser = async (userId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.delete(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(null)
      navigate("/");

      toast.success('Your account was deleted :(', {
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

  return (
    <UserContext.Provider value={{ user, setUser, userApiData, setUserApiData, userRegister, userLogin, userLogout, getUser, deleteUser, updateUser, setLoading, loading }}>
      {children}
    </UserContext.Provider>
  );
};

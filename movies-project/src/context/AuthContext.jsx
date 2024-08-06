import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    doRefreshToken();
  }, []);

  const doRefreshToken = async () => {
    if (localStorage.getItem("token")) {
      try {
        const request = await axios.get("http://localhost:8888/refresh-token", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        if (request.data.success) {
          setUserAuthenticated(true);
          setToken(request.data.accessToken);
          setIsAdmin(request.data.is_admin);
        }
      } catch (error) {
        console.error("Ha surgido un error, por favor intente más tarde", error);
      }
    } else {
      //setLoading(false);
    }
  }

  const login = ( {accessToken, refreshToken, is_admin} ) => {
    setUserAuthenticated(true);
    setToken(accessToken);
    localStorage.setItem("token", refreshToken);
    setIsAdmin(is_admin);
  }

  const logout = () => {
    setUserAuthenticated(false);
    setToken(null);
    localStorage.removeItem("token");
    setIsAdmin(false);
  }

  return (
    <AuthContext.Provider value={{ userAuthenticated, login, logout, token, isAdmin }}>
      {children}
    </AuthContext.Provider>
  )

}

export const useAuth = () => {
  return useContext(AuthContext);
}
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const login = () => {
    setUserAuthenticated(true);
  }

  const logout = () => {
    setUserAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={ {userAuthenticated, login, logout} }>
      {children}
    </AuthContext.Provider>
  )

}

export const useAuth = () => {
  return useContext(AuthContext); 
}
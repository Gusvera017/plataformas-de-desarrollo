import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);

  const login = () => {
    setUserAuthenticated(true);
  }

  const loginAdmin = () => {
    setUserAuthenticated(true);
    setAdminAuthenticated(true);
  }

  const logout = () => {
    setUserAuthenticated(false);
    setAdminAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ adminAuthenticated, userAuthenticated, login, loginAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  )

}

export const useAuth = () => {
  return useContext(AuthContext);
}
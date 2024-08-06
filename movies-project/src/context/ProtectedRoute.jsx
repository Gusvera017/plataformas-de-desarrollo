import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { userAuthenticated } = useAuth();
  
  if (!userAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const { userAuthenticated } = useAuth();

  if (userAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" />
  }
}

export default ProtectedRoute;
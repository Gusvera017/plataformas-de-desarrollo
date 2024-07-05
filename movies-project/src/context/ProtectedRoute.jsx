import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, admin }) => {

  const { userAuthenticated, adminAuthenticated } = useAuth();
  
    if (userAuthenticated) {
      if (admin && adminAuthenticated) {
        return children;
      } else if (!admin) {
        return children;
      } else {
        return <Navigate to="/login" />;
      }
    } else {
      return <Navigate to="/login" />;
    }
}

export default ProtectedRoute;

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Menu = () => {

  const { userAuthenticated, isAdmin, logout, userID } = useAuth();
  const navigate = useNavigate();

  const handleRedirectAdmin = () => {
    navigate("/admin");
  }

  const handleRedirectUser = () => {
    if (userID) {
      navigate(`/user/${userID}`);
    } 
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">The Movies Project</Link>
          <div className="d-flex justify-content-flex-end">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {(userAuthenticated && isAdmin) &&
                <li className="nav-item">
                  <Link className="nav-link" to="/admin" onClick={handleRedirectAdmin}>Administrador</Link>
                </li>}
              {(userAuthenticated && !isAdmin) &&
                <li className="nav-item">
                  <Link className="nav-link" /* to="/user" */ to={`/user/${userID}`} onClick={handleRedirectUser}>User</Link>
                </li>}
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              {userAuthenticated ?
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link>
                </li>
                :
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
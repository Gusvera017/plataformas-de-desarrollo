
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Menu = () => {

  const { userAuthenticated, adminAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleRedirectAdmin = () => {
    navigate("/admin");
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">The Movies Project</Link>
        <Searcher />
        <div className="d-flex justify-content-flex-end">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {(userAuthenticated && adminAuthenticated) &&
              <li className="nav-item">
                <Link className="nav-link" to="/admin" onClick={handleRedirectAdmin}>Administrador</Link>
              </li>}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {userAuthenticated &&
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link>
              </li>
              /* :
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li> */
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
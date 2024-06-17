
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Menu = () => {

  const { userAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">The Movies Project</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {
              userAuthenticated ?
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link>
                </li>
                :
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  }

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail" className="form-label"> Email </label>
        <input type="email" className="form-control" id="exampleInputEmail" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword" className="form-label"> Contraseña </label>
        <input type="password" className="form-control" id="exampleInputPassword" />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleLogin}>Ingresar</button>
    </form>
  )
}

export default Login;
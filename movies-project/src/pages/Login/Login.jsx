import './Login.css';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  }

  return (
    <div className='container login'>
      <form>
        <div className='login-card'>
          <div className='w-100 mt-4 mb-3'>
            <h1>THE MOVIES PROJECT</h1>
          </div>
          <div className="w-100 mt-2 mb-3">
            <label htmlFor="exampleInputEmail" className="form-label"> Ingrese su email </label>
            <input type="email" className="form-control" id="exampleInputEmail" />
          </div>
          <div className="w-100 mt-2 mb-3">
            <label htmlFor="exampleInputPassword" className="form-label"> Ingrese su contraseña </label>
            <input type="password" className="form-control" id="exampleInputPassword" />
          </div>
          <div className='w-100 mt-5 button-container-login'>
            <button type="button" className="w-100 btn btn-primary" onClick={handleLogin}>Ingresar</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
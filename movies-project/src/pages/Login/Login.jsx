import { useState } from 'react';
import './Login.css';
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const request = await axios.post("http://localhost:8888/login", {
        email,
        password
      });
      if (request.data.success) {
        login(request.data);
        navigate("/");
      }
      console.log("data: ", request);
    } catch (error) {
      console.error("Ha surgido un error, por favor intente más tarde", error);
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleRedirectRegister = () => {
    navigate("/register");
    console.log("Redirigiendo")
  }

  return (
    <div className='container login'>
      <form>
        <div className='login-card'>
          <div className='w-100 mt-4 mb-2'>
            <h1>THE MOVIES PROJECT</h1>
          </div>
          <div className="w-100 mt-2 mb-2">
            <label htmlFor="exampleInputEmail" className="form-label"> Ingresá tu email </label>
            <input type="email" className="form-control" id="exampleInputEmail" value={email} onChange={handleEmailChange} />
          </div>
          <div className="w-100 mt-2 mb-2">
            <label htmlFor="exampleInputPassword" className="form-label"> Ingresá tu contraseña </label>
            <input type="password" className="form-control" id="exampleInputPassword" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="w-100 mt-2 mb-2">
            <Link to="/register" onClick={handleRedirectRegister}>¿No tenés usuario? Registrate acá</Link>
          </div>
          <div className='w-100 mt-4 button-container-login'>
            <button type="button" className="w-100 btn btn-primary" onClick={handleLogin}>Ingresar</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
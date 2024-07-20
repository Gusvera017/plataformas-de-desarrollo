import { useState } from 'react';
import './Login.css';
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const { login, loginAdmin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //console.log("MAIL: ", email);
    //console.log("PASSWORD: ", password);
    if (email === "admin@admin.com" && password === "1234") {
      loginAdmin();
      navigate("/admin");
    } else {
      login();
      navigate("/");
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
          <div className='w-100 mt-4 mb-3'>
            <h1>THE MOVIES PROJECT</h1>
          </div>
          <div className="w-100 mt-2 mb-3">
            <label htmlFor="exampleInputEmail" className="form-label"> Ingrese su email </label>
            <input type="email" className="form-control" id="exampleInputEmail" value={email} onChange={handleEmailChange} />
          </div>
          <div className="w-100 mt-2 mb-3">
            <label htmlFor="exampleInputPassword" className="form-label"> Ingrese su contraseña </label>
            <input type="password" className="form-control" id="exampleInputPassword" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="w-100 mt-2 mb-3">
            <Link to="/register" onClick={handleRedirectRegister}>¿No tenés usuario? Registrarte acá</Link>
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
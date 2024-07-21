import { useState } from 'react';
import './Register.css';
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    login();
    navigate("/");
  }

  const handleRedirectLogin = () => {
    navigate("/login");
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className='container register'>
      <form>
        <div className='register-card'>
          <div className='w-100 mt-4 mb-2'>
            <h1>THE MOVIES PROJECT</h1>
          </div>
          <div className='d-flex row'>
            <div className="mt-2 mb-2" style={{width: '20rem'}}>
              <label htmlFor="exampleInputName" className="form-label"> Ingresá tu nombre </label>
              <input type="text" className="form-control" id="exampleInputName" value={name} onChange={handleNameChange} />
            </div>
            <div className="mt-2 mb-2" style={{width: '20rem'}}>
              <label htmlFor="exampleInputEmail" className="form-label"> Ingresá tu email </label>
              <input type="email" className="form-control" id="exampleInputEmail" value={email} onChange={handleEmailChange} />
            </div>
          </div>
          <div className="w-100 mt-2 mb-2">
            <label htmlFor="exampleInputPassword" className="form-label"> Ingresá tu contraseña </label>
            <input type="password" className="form-control" id="exampleInputPassword" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="w-100 mt-2 mb-2">
            <Link to="/login" onClick={handleRedirectLogin}>Ya tenés usuario. Ingresá acá</Link>
          </div>
          <div className='w-100 mt-4 button-container-register'>
            <button type="button" className="w-100 btn btn-primary" onClick={handleRegister}>Registrarme</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register;
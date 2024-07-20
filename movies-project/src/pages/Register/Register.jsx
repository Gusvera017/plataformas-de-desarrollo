import { useState } from 'react';
import './Register.css';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
          <div className='w-100 mt-4 mb-3'>
            <h1>THE MOVIES PROJECT</h1>
          </div>
          <div className="w-100 mt-2 mb-3">
            <label htmlFor="exampleInputName" className="form-label"> Ingrese su nombre </label>
            <input type="text" className="form-control" id="exampleInputName" value={name} onChange={handleNameChange} />
          </div>
          <div className="w-100 mt-2 mb-3">
            <label htmlFor="exampleInputEmail" className="form-label"> Ingrese su email </label>
            <input type="email" className="form-control" id="exampleInputEmail" value={email} onChange={handleEmailChange} />
          </div>
          <div className="w-100 mt-2 mb-3">
            <label htmlFor="exampleInputPassword" className="form-label"> Ingrese su contraseña </label>
            <input type="password" className="form-control" id="exampleInputPassword" value={password} onChange={handlePasswordChange} />
          </div>
          <div className='w-100 mt-5 button-container-register'>
            <button type="button" className="w-100 btn btn-primary" onClick={handleRegister}>Registrarme</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register;
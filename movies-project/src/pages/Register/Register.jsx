import { useState } from 'react';
import './Register.css';
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'; 
import axios from 'axios';

const Register = () => {

  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleRegister = async () => {
      try {
        const response = await axios.post('http://localhost:8888/register', {
          name,
          email,
          password
        });
        if (response.status === 200) {
          //Si el registro se realiza correctamente, redirijo al usuario auntenticado a la Login
          console.log("Usuario registrado exitosamente:", response);
          await login(email, password);
          navigate("/login");
        }
      } catch (error) {
        console.error("Falló el registro del usuario, error: ", error);
        throw error;
      }
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
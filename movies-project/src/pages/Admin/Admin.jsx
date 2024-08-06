import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Button } from 'react-bootstrap';
import "./Admin.css"

const Admin = () => {

  const [users, setUsers] = useState([]);
  const { token } = useAuth();

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8888/admin', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.success) {
        setUsers(response.data.users);
      } else {
        console.error('No se pudo realizar la consulta');
      }
    } catch (error) {
      console.error('Error en la obtención de usuarios: ', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [token]);

  return (
    <>
      <div className="container-admin">
        <div className="title-admin mb-5 pt-5">
          <h1>BIENVENID#! al Panel de Administrador</h1>
        </div>
        <div className="d-flex justify-content-center">
          <p style={{ fontSize: '20px' }}>Desde aquí podrás administrar a los usuarios del sitio </p>
        </div>

        <div>
          <h1 className="d-flex justify-content-center">Lista de Usuarios Activos</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.is_admin === '1' ? 'Sí' : 'No'}</td>
                  <td><Button variant='warning'>Editar</Button></td>
                  <td><Button variant='danger'>Borrar</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>

  )
}

export default Admin;
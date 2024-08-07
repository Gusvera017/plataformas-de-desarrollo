import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Button, Form } from 'react-bootstrap';
import "./Admin.css"

const Admin = () => {

  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', is_admin: '' });
  const { token } = useAuth();

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8888/admin', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.success) {
        setUsers(response.data.users);
      } else {
        console.error('Error al obtener los registros');
      }
    } catch (error) {
      console.error('Error al obtener los registros: ', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:8888/admin/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.success) {
        // Actualizo la lista de usuarios
        setUsers(users.filter(user => user.id !== userId));
      } else {
        console.error('Error Usuario no encontrado');
      }
    } catch (error) {
      console.error('Error al eliminar el usuario: ', error);
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email, is_admin: user.is_admin });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    console.log("Nuevos datos del user: ", formData);
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8888/admin/${editingUser.id}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.success) {
        // Actualizo la lista de usuarios
        setUsers(users.map(user => (user.id === editingUser.id ? { ...user, ...formData } : user)));
        setEditingUser(null);
      } else {
        console.error('No se pudo actualizar el usuario');
      }
    } catch (error) {
      console.error('Error al actualizar el usuario: ', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [token]);

  return (
    <>
      <div className="container-admin">
        <div className="title-admin mb-2 pt-5">
          <h1>BIENVENID#! al Panel de Administrador</h1>
        </div>
        <div className="d-flex justify-content-center">
          <p style={{ fontSize: '20px' }}>Desde aquí podrás administrar a los usuarios del sitio </p>
        </div>

        {
          !editingUser &&
          <>
            <div className='mb-5'>
              <h1 className="d-flex justify-content-center col">Lista de Usuarios Activos</h1>
            </div>

            <div style={{ marginLeft: '22rem' }}>
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
                      <td>{user.is_admin === '1' ? 'Si' : 'No'}</td>
                      <td>
                        <Button
                          variant='warning'
                          onClick={() => handleEditClick(user)}
                        >
                          Editar
                        </Button>
                      </td>
                      <td>
                        <Button
                          variant='danger'
                          onClick={() => deleteUser(user.id)}
                        >
                          Borrar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        }


        {editingUser && (
          <>
            <div className='d-flex justify-content-center'>
              <h2>Editar Usuario</h2>
            </div>
            <div className='d-flex justify-content-center'>
              <Form onSubmit={handleUpdate}>
                <div style={{ width: '20rem', margin: '1rem' }}>
                  <Form.Group controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
                <div style={{ width: '20rem', margin: '1rem' }}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
                <div style={{ width: '20rem', margin: '1rem' }}>
                  <Form.Group controlId="formIsAdmin">
                    <Form.Label>Admin</Form.Label>
                    <Form.Control
                      as="select"
                      name="is_admin"
                      value={formData.is_admin}
                      onChange={handleChange}
                    >
                      <option value={false}>No</option>
                      <option value={true}>Sí</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className='d-flex justify-content-center'>
                  <div style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                    <Button variant="primary" type="submit">Actualizar</Button>
                  </div>
                  <div style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                    <Button variant="secondary" onClick={() => setEditingUser(null)}>Cancelar</Button>
                  </div>
                </div>
              </Form>
            </div>
          </>
        )}
      </div>
    </>

  )
}

export default Admin;
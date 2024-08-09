import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import LoadingSpinner from '../../components/ReusableComponents/LoadingSpinner';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const { userID, token } = useAuth();

    useEffect(() => {
        const getUser = async () => {
            try {
                if (token) {
                    const response = await axios.get(`http://localhost:8888/user/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    if (response.data.success) {
                        setUser(response.data.user);
                    }
                }
            } catch (error) {
                console.error("Error al obtener la información del usuario", error);
            }
        };

        getUser();
    }, [id, token]);


    if (!user) return <LoadingSpinner />;

    return (
        <div>
            <h1>Perfil de Usuario</h1>
            <p>Nombre: {user.name}</p>
            <p>Correo: {user.email}</p>
            <p>Rol: {user.is_admin === '1' ? 'Administrador' : 'Usuario'}</p>
            {/* Revisar la posibilidad de agregar o borrar peliculas */}
        </div>
    )
}

export default User; 
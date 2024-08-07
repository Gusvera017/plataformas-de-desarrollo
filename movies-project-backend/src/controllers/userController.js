const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const is_admin = false;

  try {
    await userModel.create({ name, email, password, is_admin });
    res.json({ success: true, message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Error al intentar registrar al usuario' });
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.login({ email, password });
    if (user == null) {
      res.json({ success: false, message: 'Credenciales incorrectas' });
    } else {
      const playload = {
        ID: user.id,
        name: user.name,
        is_admin: (user.is_admin == '1')
      };

      const accessToken = jwt.sign(
        playload,
        process.env.JWT_ACCESS_TOKEN_SECRET,
        { expiresIn: '15m' }
      );

      const refreshToken = jwt.sign(
        playload,
        process.env.JWT_REFRESH_TOKEN_SECRET,
        { expiresIn: '7d' }
      );

      res.json({
        success: true,
        message: 'Inicio de sesión exitoso',
        accessToken,
        refreshToken,
        is_admin: playload.is_admin,
        userID: playload.ID
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Error al intentar iniciar sesión' });
  }
}

exports.getUserInfo = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userModel.getUserById(userId);
    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(404).json({ success: false, message: 'Usuario no encontrado :(' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener la información del usuario' });
  }
}

exports.refreshToken = (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ success: false, message: 'Token de autenticación no proporcionado' });
  }
  
  const [bearer, token] = authHeader.split(' ');
  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({ success: false, message: 'Formato de token no válido' });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET);
    //Información que se va a hashear.
    const playload = { ID: user.ID, name: user.name, is_admin: user.is_admin };
    // Ahora, user contiene información del usuario. Puedes generar un nuevo accessToken.
    const newAccessToken = jwt.sign(playload, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    // Devolver el nuevo accessToken al cliente
    res.json({ success: true, accessToken: newAccessToken, is_admin: user.is_admin });
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Token de autenticación inválido' });
  }
}

//Ruta protegida
exports.welcome = (req, res) => {
  res.json({ success: true, message: 'Bienvenida/o ' + req.user.name });
}
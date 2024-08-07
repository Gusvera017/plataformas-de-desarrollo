const adminModel = require('../models/adminModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await adminModel.getAllUsers();
    res.json({ success: true, users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener los registros' });
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await adminModel.deleteUserById(userId);
    if (result > 0) {
      res.json({ success: true, message: 'Usuario eliminado correctamente' });
    } else {
      res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al eliminar el usuario' });
  }
};

exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;

  try {
    const result = await adminModel.updateUserById(userId, updateData);
    if (result > 0) {
      res.json({ success: true, message: 'Usuario actualizado correctamente' });
    } else {
      res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al actualizar el usuario' });
  }
};
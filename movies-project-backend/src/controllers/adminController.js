const adminModel = require('../models/adminModel');

exports.getAllUsers = async (req, res) => {
    try {
      const users = await adminModel.getAllUsers();
      res.json({ success: true, users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error al obtener usuarios' });
    }
  };
//Conexión a la base de datos.
const pool = require('../../db');

exports.getAllUsers = async () => {
  const query = `
      SELECT id, name, email, is_admin
      FROM users
    `;

  try {
    [results] = await pool.query(query);
    console.log("Users from database: ", results)
    return results;
  } catch (error) {
    throw error;
  }
};
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

exports.deleteUserById = async (id) => {
  const query = `
    DELETE 
    FROM users 
    WHERE id = ?
  `;
  try {
    const [result] = await pool.query(query, [id]);
    return result.affectedRows;
  } catch (error) {
    throw error;
  }
};
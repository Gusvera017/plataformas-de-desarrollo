//Conexión a la base de datos.
const pool = require('../../db');

//Fechas
const { formatToday } = require("../helpers/dateHelper");

const bcrypt = require('bcrypt');

exports.create = async ({ name, email, password, is_admin }) => {
  const password_crypt = await bcrypt.hash(password, 10);
  const query = `
        INSERT INTO users(name, email, password, is_admin, created_at, updated_at)
        VALUES(?, ?, ?, ?, ?, ?)
    `;

  try {
    await pool.query(query, [name, email, password_crypt, (is_admin ? '1' : '0'), formatToday(), formatToday()]);
  } catch (error) {
    throw error;
  }
}

exports.login = async ({ email, password }) => {
  //Buscamos el usuario por su correo.
  const query = `
        SELECT id, name, email, password, is_admin
        FROM users
        WHERE email = ?
    `;

  try {
    [results] = await pool.query(query, [email]);
    
    //Verificamos si encontró el usuario.
    if (results.length == 1) {
      const user = results[0];
      const is_password = await bcrypt.compare(password, user.password);
      return is_password ? user : null;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
}
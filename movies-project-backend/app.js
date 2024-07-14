const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');

const app = express();
const port = 8888;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.options('*', cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(port, () => {
  console.log('Servidor iniciado en: http://localhost:' + port);
});

app.get('/', (req, res) => {
  res.send('HOLA DESDE EL TEST');
});

app.get('/test/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.send(`Hola, ${nombre}`);
});
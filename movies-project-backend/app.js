const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8888;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Iniciamos el servidor.
app.listen(port, () => {
  console.log('Servidor iniciado en: http://localhost:' + port);
});

app.get('/test/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.send(`Hola, ${nombre}`);
});
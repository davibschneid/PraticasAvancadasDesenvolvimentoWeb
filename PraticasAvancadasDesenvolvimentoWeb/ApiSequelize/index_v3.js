// server.js
const express = require('express');
const db = require('./data_base/db');

const Usuario = require('./modelo/Usuario');

const app = express();

const PORT = process.env.PORT;

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});

// Exemplo de uso
app.get('/usuarios', async (req, res) => {
   //buscar os registros inseridos
   const usuarios = await Usuario.findAll();
   console.log(usuarios);
  res.json(usuarios);
});
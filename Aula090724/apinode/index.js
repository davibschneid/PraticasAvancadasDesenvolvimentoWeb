// Importa o m�dulo express
const express = require('express');

// Cria uma aplica��o express
const app = express();

// Define a porta onde o servidor ir� escutar
const port = 3000;

// Define uma rota para a raiz ('/') que responde com 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Inicia o servidor e escuta na porta definida
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

// Importa o módulo express
const express = require('express');

// Cria uma aplicação express
const app = express();

// Define a porta onde o servidor irá escutar
const port = 3000;


let usuarios = [
	{id:1, nome:'Davi',idade:40, cidade:'Canoas'},
	{id:2, nome:'Eduardo',idade:20, cidade:'Sao Leopoldo'},
	{id:3, nome:'Tomas',idade:20, cidade:'Sao Leopoldo'}
];
	
app.get('/usuarios', (req, res) => {
	res.json(usuarios);
});


// Define uma rota para a raiz ('/') que responde com 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Inicia o servidor e escuta na porta definida
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

// Importa o módulo express
const express = require('express');

// Importa o módulo db
const db = require('./db'); 

// Cria uma aplicação express
const app = express();

// Middleware para analisar o JSON do corpo da requisição
app.use(express.json());

// Define a porta onde o servidor irá escutar
const port = 3000;
	
//rota que busca todos os usuarios
app.get('/usuarios', async (req, res,next) => {
	try {
		const docs = await db.findAll();
		res.send(docs);
	  } catch (err) {
		next(err);
	  }
});


//rota busca por nome de usuario
app.get('/buscarnome/:nome', async (req, res, next) => {
	const nome = req.params.nome;
	try {
		const docs = await db.findByName(nome);
		res.send(docs);
	  } catch (err) {
		next(err);
	  }
});

//rota editar registro
app.patch('/editar/:id', async (req, res, next) => {
	const id = req.params.id
	const { nome, idade, cidade } = req.body;
	const query = { nome: nome ,idade: idade, cidade: cidade };

	try {
		const docs = await db.update(id, query);
		res.send(docs);
	  } catch (err) {
		next(err);
	  }
});

//rota que cadastra novos registros
app.post('/cadastrar', async (req, res, next) => {
	const { nome, idade, cidade } = req.body;
	const query = { nome: nome ,idade: idade, cidade: cidade };

	try {
		const docs = await db.insertOne(query);
		res.send(docs);
	  } catch (err) {
		next(err);
	  }
});


// Define uma rota para a raiz ('/') que responde com 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Inicia o servidor e escuta na porta definida
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

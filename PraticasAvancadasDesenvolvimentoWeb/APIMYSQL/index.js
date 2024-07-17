//importa as configuracoes do arquivo de configuracao
require("dotenv").config();
 
// Importa o módulo express
const express = require('express');

const app = express();
//recebe o valor da PORTA do servidor
const port = process.env.PORT;

app.use(express.json());

// Importa o módulo db
const db = require('./data_base/db'); 
 
// Define uma rota para a raiz ('/') que responde com 'Hello, World!'
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

//abusca todos os usuarios  
app.get('/usuarios', async (req, res) => {
    const results = await db.selectUsuarios();
    res.json(results);
}) ;

 
//busca usuario pelo ID 
app.get('/usuarios/:id', async (req, res) => {
    const results = await db.selectUsuarioPorId(req.params.id);
    res.json(results);
});


//deleta o usuario pelo ID 
app.delete('/usuarios/:id', async (req, res) => {
    const results = await db.deleteUsuarioPorId(req.params.id);
    res.json(results);
    res.sendStatus(204);
});

 //insere um registro novo
app.post('/cadastrarUsuario', async (req, res) => {
    await db.insertUsuario(req.body);
    res.sendStatus(201);
});


 //atualiza o registro
app.patch('/editarusuario/:id', async (req, res) => {
    await db.updateUsuario(req.params.id, req.body);
    res.sendStatus(200);
})
 
// Inicia o servidor e escuta na porta definida
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
  });
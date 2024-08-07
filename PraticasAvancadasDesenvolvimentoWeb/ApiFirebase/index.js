const express = require('express');

const rotas = require('./rotas/fireBaseRotas');

//importa as configuracoes do arquivo de configuracao
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

//Importar o modulo Swagger
const setupSwagger = require('./swagger');

// Configurar Swagger
setupSwagger(app);

app.use(express.json());
app.use('/api', rotas);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });

const express = require('express');
const sequelize = require('./data_base/db');
const usuariosRotas = require('./rotas/usuarioRotas');

//Importar o modulo Swagger
const setupSwagger = require('./swagger');

//importar o modulo cors para receber requisicoes de diferente origem
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;


app.use(require("cors")());

//restringir chamadas somente da origem conhecida
const corsOptions = {
  origin: 'http://localhost:3000', // Permitir apenas essa origem
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
  credentials: true, // Permitir envio de cookies
  optionsSuccessStatus: 204 // Status para requisições preflight
};

app.use(cors(corsOptions));

// Configurar Swagger
setupSwagger(app);

app.use(express.json());
app.use('/api', usuariosRotas);


sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
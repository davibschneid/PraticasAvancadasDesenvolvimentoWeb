
const express = require('express');
const sequelize = require('./data_base/db');
const usuariosRotas = require('./rotas/usuarioRotas');
const uploadArquivoRotas = require('./rotas/uploadArquivoRotas');
const validarToken = require('./rotas/tokenRotas');
const enviarMensagem = require('./rotas/enviarMensagemRotas');
const google = require('./rotas/googleRotas');

const session = require('express-session');
const passport = require('passport');
require('./google/passaporteGoogle'); // Importa a configuracao do Passport do google

//Importar o modulo Swagger
const setupSwagger = require('./swagger');

//importar o modulo cors para receber requisicoes de diferente origem
const cors = require('cors');


const app = express();
const PORT = process.env.PORT;


app.use(require("cors")());

app.use(session({
  secret: process.env.SECRET_ID_APP,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

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
app.use('/api', uploadArquivoRotas);
app.use('/api', validarToken);
app.use('/api', enviarMensagem);
app.use('/api', google);


sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
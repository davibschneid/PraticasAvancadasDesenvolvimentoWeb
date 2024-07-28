
//importa o modulo do swagger jsdoc
const swaggerJsdoc = require('swagger-jsdoc');

//importa o modulo com a interface grafica do swagger
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'APIROUTER',
      version: '1.0.0',
      description: 'Uma aplicacao com as rotas usando Sequelize',
    },
    servers: [
      {
        url: 'http://localhost:3001/api',
      },
    ],
  },
  // Caminho para os arquivos de rotas
  apis: ['./rotas/*.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
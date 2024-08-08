
const Sequelize = require('sequelize');
const database = require('../data_base/db');

const Usuario = database.define('usuario', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  idade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  uf: {
    type: Sequelize.STRING,
    allowNull: true
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: true
  },
  logradouro: {
    type: Sequelize.STRING,
    allowNull: true
  },
  complemento: {
    type: Sequelize.STRING,
    allowNull: true
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: true
  },
  numero: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {



  // Configurações do modelo
  timestamps: true, // Habilita createdAt e updatedAt
  hooks: {
    beforeCreate: (usuario, options) => {
      const now = new Date();
      const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
      usuario.createdAt = threeHoursLater;
      usuario.updatedAt = threeHoursLater;
    },
    beforeUpdate: (usuario, options) => {
      const now = new Date();
      const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
      usuario.updatedAt = threeHoursLater;
    }
  }

})



module.exports = Usuario;
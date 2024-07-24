 
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
    cidade:  {
        type: Sequelize.STRING,
        allowNull: false
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
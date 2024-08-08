const Sequelize = require('sequelize');
const database = require('../data_base/db');

const { DataTypes } = require('sequelize');

const Upload = database.define('upload', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nomeArquivo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dados: {
    type: DataTypes.BLOB('long'), // Especifica um LONGBLOB
    allowNull: false
  }
}, {

  // Configurações do modelo
  timestamps: true, // Habilita createdAt e updatedAt
  hooks: {
    beforeCreate: (upload, options) => {
      const now = new Date();
      const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
      upload.createdAt = threeHoursLater;
      upload.updatedAt = threeHoursLater;
    },
    beforeUpdate: (upload, options) => {
      const now = new Date();
      const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
      upload.updatedAt = threeHoursLater;
    }
  }

})

module.exports = Upload;
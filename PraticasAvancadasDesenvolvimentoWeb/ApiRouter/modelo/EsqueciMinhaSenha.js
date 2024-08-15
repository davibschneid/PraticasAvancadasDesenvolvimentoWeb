
const Sequelize = require('sequelize');
const database = require('../data_base/db');
const Usuario = require('./Usuario');

const EsqueciMinhaSenha = database.define('esqueci_minha_senha', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  usuarioId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,   // Model ao qual se refere
      key: 'id'      // Chave da tabela User que está sendo referenciada
    },
    onUpdate: 'CASCADE',   // Ação ao atualizar o id do usuário
    onDelete: 'CASCADE',   // Ação ao deletar o usuário
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  token: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
    tableName: 'esqueci_minha_senha', // Nome da tabela no banco de dados
  // Configurações do modelo
  timestamps: true, // Habilita createdAt e updatedAt
  hooks: {
    beforeCreate: (esqueciMinhaSenha, options) => {
      const now = new Date();
      const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
      esqueciMinhaSenha.createdAt = threeHoursLater;
      esqueciMinhaSenha.updatedAt = threeHoursLater;
    },
    beforeUpdate: (esqueciMinhaSenha, options) => {
      const now = new Date();
      const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
      esqueciMinhaSenha.updatedAt = threeHoursLater;
    }
  }

});

// Definir a associação entre Usuario e EsqueciMinhaSenha
Usuario.hasMany(EsqueciMinhaSenha, { foreignKey: 'usuarioId' });
EsqueciMinhaSenha.belongsTo(Usuario, { foreignKey: 'usuarioId' });

module.exports = EsqueciMinhaSenha;
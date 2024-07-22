 
// Sync do Sequelize com nosso banco de dados, as tabelas sejrap mapeadas de forma correta
//IIFE (Immediately Invoked Function Expression) funcao em JavaScript que e executada assim que definida.
(async () => {
    const database = require('./data_base/db');
    const Usuario = require('./modelo/Usuario');
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();


 

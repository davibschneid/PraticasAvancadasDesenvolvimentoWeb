
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

    //insere registro via Sequelize
    const resultadoCreate = await Usuario.create({
        nome: 'REGISTRO 3',
        idade: 3,
        cidade: 'CIDADE 3'
    })
    console.log(resultadoCreate);


    //buscar os registros inseridos
    const usuarios = await Usuario.findAll();
    console.log(usuarios);


    const usuario = await Usuario.findByPk(1);
    console.log(usuario);

    //alterar registro
    const alterarUsuario = await Usuario.findByPk(1);
    alterarUsuario.nome = "REGISTRO ALTERADO";
     
    const resultadoSave = await alterarUsuario.save();
    console.log(resultadoSave);

    //deletar registro
    const deletarRegistro = await Usuario.findByPk(2);
    deletarRegistro.destroy();
    console.log(deletarRegistro);

})();


 


//Importa o objeto usuario
const Usuario = require('../modelo/Usuario');

//Importar para acessar os operadores do Sequelize
const { Op } = require('sequelize');

//importar o modulo de criptografia
const bcrypt = require('bcryptjs');

//importar o modulo de Web Token
const jwt = require('jsonwebtoken');


// Criar um novo usuário
exports.createusuario = async (req, res) => {
  console.log('createusuario');
  const { nome, idade, cidade, uf ,cep, logradouro, complemento, bairro, numero, email, senha} = req.body;
  console.log('Createusuario.Nome'+nome);
  console.log('createusuario.Idade'+idade);
  console.log('createusuario.Cidade'+cidade);
  console.log('createusuario.UF'+uf);
  console.log('createusuario.CEP'+cep);
  console.log('createusuario.Logradouro'+logradouro);
  console.log('createusuario.Complemento'+complemento);
  console.log('createusuario.Bairro'+bairro);
  console.log('createusuario.Numero'+numero);
  console.log('createusuario.Numero'+email);

  const hashedPassword = getHashedPassword(senha);
  
  try {
    const novoUsuario = await Usuario.create({ nome, idade , cidade, uf, cep, logradouro, complemento, bairro, numero, email, senha:hashedPassword});
    res.status(201).json(novoUsuario);
  } catch (err) {
    console.log("Erro ao criar usuário",err);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

// Obter todos os usuários
exports.getusuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao obter usuários' });
  }
};

// Atualizar um usuário
exports.updateusuario = async (req, res) => {
  const { id } = req.params;
  const { nome, idade, cidade, uf, cep, logradouro, complemento, bairro, numero  } = req.body;
  console.log("updateusuario id:"+id+" - nome:"+nome+" - idade:"+idade+"- cidade:"+cidade+"- uf:"+uf+"- cep:"+cep+"- logradouro:"+logradouro+"- complemento:"+complemento+"- bairro:"+bairro+"- numero:"+numero);
  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      usuario.nome = nome;
      usuario.idade = idade;
      usuario.cidade = cidade;
      usuario.uf = uf;
      usuario.cep = cep;
      usuario.logradouro = logradouro;
      usuario.complemento = complemento;
      usuario.bairro = bairro;
      usuario.numero = numero;
      usuario.updatedAt = new Date();
      await usuario.save();
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
};



// buscar por ID do usuário
exports.buscarId = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar o usuário' });
  }
};


// buscar por nome de usuário
exports.buscarUsuarioPorNome = async (req, res) => {
  const {nome} = req.params;
  try {
    const usuario = await Usuario.findAll({ where: { nome: {  [Op.like]: `%${nome}%` } } });

    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ error: 'Nenhum nome de usuário não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar o por nome usuário' });
  }
};



// Deletar um usuário
exports.deleteusuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      await usuario.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};

function getHashedPassword(senha) {
  console.log('getHashedPassword',senha);
  // valor 10 e o valor do custo para gerar o hash
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(senha, salt);
  console.log('getHashedPassword.hashedPassword:',hashedPassword);
  return hashedPassword;
};


// Efetua o login do usuario
exports.login = async (req, res) => {

  const { email, senha } = req.body;

  console.log('login',email);
  try {
      const usuario = await Usuario.findOne({ where: { email } });
      console.log('Usuario....:',usuario);
      
      if (usuario === null) {
          return res.status(400).send('Dados incorretos - cod 001!');
      }
      else{
        console.log('Usuario.email econtrado:',usuario.email);
        const isPasswordValid = bcrypt.compareSync(senha, usuario.senha);

        if (!isPasswordValid) {
            console.log('Dados incorretos - cod 002!');
            return res.status(400).send('Dados incorretos!');
        }
        const token = jwt.sign({ usuarioId: usuario.id }, process.env.JWT_KEY, { expiresIn: '10m' });
        res.send({ token });
    }
  } catch (err) {
   
    console.log('Erro no login',err);
      res.status(400).send('Erro no login : ' + err.message);
  }
};


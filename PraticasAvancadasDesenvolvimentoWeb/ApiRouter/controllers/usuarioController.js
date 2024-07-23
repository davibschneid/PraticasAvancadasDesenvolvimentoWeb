
//Importa o objeto usuario
const Usuario = require('../modelo/Usuario');


// Criar um novo usuário
exports.createusuario = async (req, res) => {
  const { nome, idade, cidade } = req.body;
  try {
    const novoUsuario = await Usuario.create({ nome, idade , cidade});
    res.status(201).json(novoUsuario);
  } catch (err) {
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
  const { nome, idade, cidade } = req.body;
  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      usuario.nome = nome;
      usuario.idade = idade;
      usuario.cidade = cidade;
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
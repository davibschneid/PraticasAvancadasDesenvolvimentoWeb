
//Importa o modulo Express
const express = require('express');

//Cria o objeto rotas
const router = express.Router();

//Importa o modulo usuarioController
const usuarioController = require('../controllers/usuarioController');

//criar a rota criar usuario
/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               idade:
 *                 type: integer
 *               cidade:
 *                 type: string
 *               uf:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 2
 *               cep:
 *                 type: string
 *               complemento:
 *                 type: string
 *               bairro:
 *                 type: string
 *               numero:
 *                 type: integer
 *               email:
 *                 type: string
 *                 description: O email do usuário
 *               senha:
 *                 type: string
 *                 description: A senha do usuário
 *     responses:
 *       201:
 *         description: Usuario criado
 *       500:
 *         description: Erro ao criar usuario
 */
router.post('/usuarios', usuarioController.createusuario);



//criar a rota buscar usuarios
/**
 * @swagger
 * tags:
 *   name: Usuario
 *   description: Busca todos os usuários
 */

/**
 * @swagger
 * /buscarId/{id}:
 *   get:
 *     summary: Buscar registro por ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Buscar registro por ID
 */
router.get('/buscarId/:id', usuarioController.buscarId);





//criar a rota buscar usuarios que contem o nome
/**
 * @swagger
 * tags:
 *   name: Usuario
 *   description: Busca todos os usuários que contem o nome
 */

/**
 * @swagger
 * /buscarUsuarioPorNome/{nome}:
 *   get:
 *     summary: Busca todos os usuários que contem o nome
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: nome
 *         schema:
 *           type: string
 *         required: true
 *         description: Nome do usuario
 *     responses:
 *       200:
 *         description: Busca todos os usuários que contem o nome
 */
router.get('/buscarUsuarioPorNome/:nome', usuarioController.buscarUsuarioPorNome);



//criar a rota buscar usuarios
/**
 * @swagger
 * tags:
 *   name: Usuario
 *   description: Busca todos os usuários
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Retorna a lista de todos os usuários
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: A lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/usuarios', usuarioController.getusuarios);


//criar a rota editar usuarios
/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Atualiza um usuário existente
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               idade:
 *                 type: integer
 *               cidade:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao atualizar usuário
 */
router.put('/usuarios/:id', usuarioController.updateusuario);

//criar a rota deletar usuario
/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Deletar um usuário existente
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       204:
 *         description: Usuário deletado
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao deletar usuário
 */
router.delete('/usuarios/:id', usuarioController.deleteusuario);

//cria a rota de login
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autentica um usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: O email do usuário
 *               senha:
 *                 type: string
 *                 description: A senha do usuário
 *     responses:
 *       200:
 *         description: Login bem-sucedido, retorna o token JWT
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Usuário não encontrado ou senha inválida
 *       500:
 *         description: Erro ao fazer login
 */
router.post('/login', usuarioController.login);







//cria a rota de esqueci minha senha
/**
 * @swagger
 * /esqueci-minha-senha:
 *   post:
 *     summary: Recuperar senha do usuário
 *     tags: [Recuperar senha]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: O email do usuário
 *     responses:
 *       200:
 *         description: Dados encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Dados não encontrados ou e-mail inválido
 *       500:
 *         description: Erro ao recuperar a senha
 */
router.post('/esqueci-minha-senha', usuarioController.esqueciMinhaSenha);



//cria a rota para resetar a senha
/**
 * @swagger
 * /resetarsenha:
 *   post:
 *     summary: Redefinir senha do usuário
 *     description: Redefine a senha do usuário usando um token de recuperação.
 *     tags:
 *       - Recuperar senha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *               - senha
 *             properties:
 *               token:
 *                 type: string
 *                 description: Token de recuperação de senha
 *               senha:
 *                 type: string
 *                 description: Nova senha do usuário
 *     responses:
 *       200:
 *         description: Senha redefinida com sucesso
 *       401:
 *         description: Token inválido ou expirado
 *       500:
 *         description: Erro ao resetar a senha
 */
router.post('/resetarsenha', usuarioController.resetarSenha);



/**
 * @swagger
 * /buscarUsuarioComEsqueciMinhaSenhaPorId/{usuarioId}:
 *   get:
 *     summary: Busca usuário por ID e suas solicitações de senha esquecida
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: usuarioId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 EsqueciMinhaSenha:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       usuarioId:
 *                         type: integer
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/buscarUsuarioComEsqueciMinhaSenhaPorId/:usuarioId', usuarioController.buscarUsuarioComEsqueciMinhaSenhaPorId);

//exporta as rotas criadas
module.exports = router;
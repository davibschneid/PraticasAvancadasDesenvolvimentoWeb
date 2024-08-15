//Importa o modulo Express
const express = require('express');
const fireBaseController  = require('../controller/fireBaseController');



//Cria o objeto rotas
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: ID do usuário
 *         name:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string
 *           description: Email do usuário
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API para gerenciar usuários
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Adiciona um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário adicionado com sucesso
 *       500:
 *         description: Erro ao adicionar o usuário
 */
router.post('/user', fireBaseController.addUser);



/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Dados do usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao buscar o usuário
 */
router.get('/user/:id', fireBaseController.getUser);





/**
 * @swagger
 * /user/name/{name}:
 *   get:
 *     summary: Retorna um ou mais usuários pelo nome
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome do usuário
 *     responses:
 *       200:
 *         description: Usuário(s) encontrado(s)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: Nenhum usuário encontrado com esse nome
 *       500:
 *         description: Erro ao buscar o usuário
 */
router.get('/user/name/:name', fireBaseController.getUserByName);



/**
 * @swagger
 * /user/name/{name}:
 *   delete:
 *     summary: Deleta um ou mais usuários pelo nome
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome do usuário
 *     responses:
 *       200:
 *         description: Usuário(s) deletado(s) com sucesso
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "User(s) with name John Doe deleted successfully"
 *       404:
 *         description: Nenhum usuário encontrado com esse nome
 *       500:
 *         description: Erro ao deletar o(s) usuário(s)
 */
router.delete('/user/name/:name', fireBaseController.deleteUserByName);


/**
 * @swagger
 * /user/name/{name}:
 *   put:
 *     summary: Atualiza um ou mais usuários pelo nome
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome do usuário a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Novo email do usuário
 *               age:
 *                 type: integer
 *                 description: Nova idade do usuário
 *             example:
 *               email: "newemail@example.com"
 *               age: 35
 *     responses:
 *       200:
 *         description: Usuário(s) atualizado(s) com sucesso
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "User(s) with name John Doe updated successfully"
 *       404:
 *         description: Nenhum usuário encontrado com esse nome
 *       500:
 *         description: Erro ao atualizar o(s) usuário(s)
 */
router.put('/user/name/:name', fireBaseController.updateUserByName);


//exporta as rotas criadas
module.exports = router;
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

//exporta as rotas criadas
module.exports = router;

//Importa o modulo Express
const express = require('express');

//Cria o objeto rotas
const router = express.Router();


//Importa o modulo tokenController
const enviarMensagemController = require('../controllers/enviarMensagemController');

//cria a rota de enviar SMS
/**
 * @swagger
 * /enviarsms:
 *   post:
 *     summary: Enviar mensagem via SMS
 *     tags: [Envio de mensagens]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               telefone:
 *                 type: string
 *                 description: Telefone para enviar a mensagem
 *               mensagem:
 *                 type: string
 *                 description: Mensagem a ser enviada
 *     responses:
 *       200:
 *         description: Mensagem enviada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 retorno:
 *                   type: string
 *       400:
 *         description: Telefone não encontrado ou inválido
 *       500:
 *         description: Erro ao enviar a mensagem
 */
router.post('/enviarsms', enviarMensagemController.enviarSMS);




//cria a rota de enviar SMS
/**
 * @swagger
 * /enviarsmstelesing:
 *   post:
 *     summary: Enviar mensagem via SMS
 *     tags: [Envio de mensagens]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               telefone:
 *                 type: string
 *                 description: Telefone para enviar a mensagem
 *               mensagem:
 *                 type: string
 *                 description: Mensagem a ser enviada
 *     responses:
 *       200:
 *         description: Mensagem enviada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 retorno:
 *                   type: string
 *       400:
 *         description: Telefone não encontrado ou inválido
 *       500:
 *         description: Erro ao enviar a mensagem
 */
router.post('/enviarsmstelesing', enviarMensagemController.enviarSMSTTelesginService);




//cria a rota de enviar Email
/**
 * @swagger
 * /enviaremail:
 *   post:
 *     summary: Enviar mensagem via E-mail
 *     tags: [Envio de mensagens]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               destinatario:
 *                 type: string
 *                 description: Destinatario que recebera o e-mail
 *               assunto:
 *                 type: string
 *                 description: Assunto do e-mail
 *               mensagem:
 *                 type: string
 *                 description: Mensagem do e-mail
 *     responses:
 *       200:
 *         description: E-mail enviada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 retorno:
 *                   type: string
 *       400:
 *         description: Erro ao enviar o e-mail ou e-mail inválido
 *       500:
 *         description: Erro ao enviar a e-mail
 */
router.post('/enviaremail', enviarMensagemController.enviarEmail);


//exporta as rotas criadas
module.exports = router;
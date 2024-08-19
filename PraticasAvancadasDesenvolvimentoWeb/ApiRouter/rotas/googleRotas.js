//Importa o modulo Express
const express = require('express');

//Cria o objeto rotas
const router = express.Router();

//Importa o modulo usuarioController
const googleController = require('../controllers/googleController');

/**
 * @swagger
 * /auth/google:
 *   get:
 *     tags:
 *       - Autenticação
 *     summary: Autenticação com Google
 *     description: Inicia o processo de autenticação com o Google.
 *     responses:
 *       302:
 *         description: Redireciona para o Google para autenticação.
 *       500:
 *         description: Erro no servidor.
 */
router.get('/auth/google', googleController.autenticarGoogle);


/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     tags:
 *       - Autenticação
 *     summary: Callback da Autenticação com Google
 *     description: Rota de callback para tratar o retorno da autenticação com o Google.
 *     responses:
 *       200:
 *         description: Autenticação bem-sucedida. Redireciona para a página principal.
 *       401:
 *         description: Falha na autenticação.
 *       500:
 *         description: Erro no servidor.
 */
router.get('/auth/google/callback', googleController.callBackAutenticacaoGoogle);


/**
 * @swagger
 * /logout:
 *   get:
 *     tags:
 *       - Autenticação
 *     summary: Logout do Google
 *     description: Realiza o logout do usuário autenticado via Google.
 *     responses:
 *       200:
 *         description: Logout bem-sucedido. Redireciona para a página inicial.
 *       500:
 *         description: Erro no servidor.
 */
router.get('/logout', googleController.logoutGoogle);

/**
 * @swagger
 * /protegerrotas:
 *   get:
 *     tags:
 *       - Autenticação
 *     summary: Protege rotas
 *     description: Verifica se o usuário está autenticado para acessar rotas protegidas.
 *     responses:
 *       200:
 *         description: Acesso permitido. O usuário está autenticado.
 *       401:
 *         description: Acesso negado. O usuário não está autenticado.
 *       500:
 *         description: Erro no servidor.
 */
router.get('/protegerrotas', googleController.protegerRotas);


//exporta as rotas criadas
module.exports = router;
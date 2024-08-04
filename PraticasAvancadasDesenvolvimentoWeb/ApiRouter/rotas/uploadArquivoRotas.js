//Importa o modulo Express
const express = require('express');
const uploadarquivocontroller  = require('../controllers/uploadArquivosController');

const upload = require('../Multer/multer');  // Importa a configuração do multer

//Cria o objeto rotas
const router = express.Router();

//criar a rota para salvar o upload de arquivos
/**
 * @swagger
 * /uploadarquivo:
 *   post:
 *     summary: Salvar o upload de arquivo
 *     tags: [Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Upload de imagem efetuado com sucesso
 *       500:
 *         description: Erro ao efetuar o upload de imagem
 */
router.post('/uploadarquivo', upload.single('image'), uploadarquivocontroller.uploadarquivo);


/**
 * @swagger
 * /uploadarquivo/{id}:
 *   get:
 *     summary: Buscar um arquivo pelo ID
 *     tags: [Upload]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do arquivo a ser buscado
 *     responses:
 *       200:
 *         description: Arquivo buscado com sucesso
 *       404:
 *         description: Arquivo não encontrado
 *       500:
 *         description: Erro ao buscar o arquivo
 */
router.get('/uploadarquivo/:id', uploadarquivocontroller.getArquivo);

//exporta as rotas criadas
module.exports = router;
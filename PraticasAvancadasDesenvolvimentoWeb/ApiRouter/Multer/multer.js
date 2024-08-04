
//Middleware para lidar com uploads de arquivos.
const multer = require('multer');

const path = require('path');

// Configuração do Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../uploads/'));  // Diretório onde os arquivos serão armazenados
    },
    filename: (req, file, cb) => {
      cb(null, Date.now()+path.extname(file.originalname));  // Nome do arquivo
    },
    limits: { fileSize: 50 * 1024 * 1024 }  // Limite de tamanho de arquivo de 50MB, por exemplo
  });
  
  const upload = multer({ storage });

  module.exports = upload;
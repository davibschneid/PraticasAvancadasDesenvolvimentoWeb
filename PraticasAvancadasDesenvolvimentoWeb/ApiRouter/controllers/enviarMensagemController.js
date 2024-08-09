

const { enviarSMSService } = require('../service/enviarSMSService');
const { enviarEmailService } = require('../service/enviarEmailService');

exports.enviarSMS = async (req, res) => {
    const { telefone , mensagem } = req.body;
    console.log('Telefone:',telefone);
    console.log('Mensagem:',mensagem);
    try{
        if (!telefone) {
            console.log('Retorna http 400');
            res.status(400).json('Informar telefone');
        }else{
            enviarSMSService(telefone,mensagem);
        }
    }catch(err){
        console.log('Erro ao enviar SMS',err);
        res.status(500).json({ error: 'Erro ao enviar SMS' });
    }
};

exports.enviarEmail = async (req, res) => {
    const { destinatario, assunto, mensagem } = req.body;
    try {
        enviarEmailService(destinatario, assunto, mensagem);
        res.status(200).json({ success: true, message: 'Email enviado com sucesso' });
    } catch (err) {
        console.log('Erro ao enviar E-mail', err);
        res.status(500).json({ error: 'Erro ao enviar E-mail' });
    }
}




const nodemailer = require('nodemailer');

// Configura o transporte de email
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true para usar SSL/TLS
    service: 'gmail', // ou outro serviço como Yahoo, Outlook, etc.
    auth: {
        user: process.env.USER_EMAIL, // Seu email
        pass: process.env.PWD_EMAIL_GMAIL_APP // Sua senha de email ou senha de app
    }
});

// Função para enviar email
function enviarEmailService(destinatario, assunto, mensagem) {
    console.log('EnviarEmailService.destinatario',destinatario);
    const mailOptions = {
        from: process.env.USER_EMAIL, // Remetente
        to: destinatario, // Destinatário
        subject: assunto, // Assunto do email
        text: mensagem // Conteúdo do email
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erro ao enviar email:', error);
        } else {
            console.log('Email enviado com sucesso:', info.response);
        }
    });
}

module.exports = { enviarEmailService };
// Carrega a biblioteca Twilio
const twilio = require('twilio');

// Suas credenciais do Twilio
const accountSid = process.env.ACCOUNT_SID; // Substitua pelo seu Account SID
const authToken = process.env.AUTH_TOKEN; // Substitua pelo seu Auth Token

// Cria uma instância do cliente Twilio
//const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

const client = new twilio(accountSid, authToken);

// Função para enviar um SMS
function enviarSMSService(para, mensagem) {
    console.log('ENVIAR SMS');
    client.messages.create({
        body: mensagem, // O conteúdo da mensagem
        from: '??????', // Substitua pelo seu número do Twilio
        to: para // Número para o qual a mensagem será enviada
    })
    .then((message) => console.log(`Mensagem enviada com ID: ${message.sid}`))
    .catch((error) => console.error(error));
}

module.exports = { enviarSMSService };

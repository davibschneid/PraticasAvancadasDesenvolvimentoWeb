const jwt = require('jsonwebtoken');
const axios = require('axios');

exports.validaToken = async (req, res) => {
    const { token } = req.body;
    
    try {
        if (!token) {
            return res.status(400).json({ valid: false });
        } 

        // Aguarda a verificação do token Google
        const httpstatus = await verificarTokenGoogle(token);

        //se o token do google for valido nao valida o token da aplicacao
        if (httpstatus === 200) {
            return res.status(200).json({ valid: true });
        } else {
            // Verifica o token usando JWT se o token do Google não for válido
            jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ valid: false });
                } else {
                    return res.status(200).json({ valid: true });
                }
            });
        }
    } catch (err) {
        return res.status(500).json({ valid: false, error: 'Erro interno do servidor' });
    }
};

async function verificarTokenGoogle(token) {
    try {
        const response = await axios.get(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`);
        return 200; // Se o token for válido, retorna 200
    } catch (error) {
        console.error('Erro ao verificar o token:', error.response?.data || error.message);
        return 401; // Se o token for inválido, retorna 401
    }
}

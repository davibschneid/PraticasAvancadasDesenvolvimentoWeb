
const jwt = require('jsonwebtoken');

exports.validaToken = async (req, res) => {
    
    const { token } = req.body;
    console.log('Validar Token',token);
    try{
        if (!token) {
            console.log('Retorna http 400');
            res.status(400).json({ valid: false });
        }else{
            jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
            if (err) {
                console.log('Retorna http 401');
                res.status(401).json({ valid: false });
            }else{
                console.log('Retorna http 200');
                res.status(200).json({ valid: true });
            }
            });
        }
    }catch(err){
        console.log('Erro ao validar token',err);
    }
};
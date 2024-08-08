
const jwt = require('jsonwebtoken');

exports.validaToken = async (req, res) => {
    
    const { token } = req.body;
    console.log('Validar Token',token);
    if (!token) {
        res.status(400).json({ valid: false });
    }

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            res.status(401).json({ valid: false });
        }
        res.status(200).json({ valid: true });
    });
};
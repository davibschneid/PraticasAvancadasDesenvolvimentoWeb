
const passport = require('passport');

// Autentica o usuario no google
exports.autenticarGoogle = (req, res, next) => {
    console.log('Iniciando autenticação com Google');
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
};


// Efetua o callback da autenticacao do usuario no google
exports.callBackAutenticacaoGoogle = (req, res, next) => {

    passport.authenticate('google', { failureRedirect: '/login' }, (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/login');
        }
        // O token estará disponível em info.accessToken
        const token = info.accessToken;
        console.log('Token gerado no Google:', token);

        // Loga o usuário
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            // Redireciona para o frontend com o token
            res.redirect(`http://localhost:3000/auth/google/callback?token=${token}`);
        });
    })(req, res, next);
};


// Efetuar o logout do usuario
exports.logoutGoogle = async (req, res) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/');
      }); 
  };


// Efetuar o logout do usuario
exports.protegerRotas = async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
      }
      res.send(`Olá, ${req.user.displayName}`);
  };


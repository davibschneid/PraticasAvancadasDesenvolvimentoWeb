import React, { useState, useContext } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../CSS/login.css';
import { AuthContext } from '../autenticacao/autenticacao';
import googleIcon from '../CSS/google.png'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { setAuthToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const login = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/login', { email, senha });
            setAuthToken(response.data.token);
            navigate('/home'); // Redireciona para a página interna
        } catch (error) {
            alert('Erro no login: ' + error.response.data);
        }
    };

    // Função para redirecionar para o Google login
    const loginWithGoogle = () => {
        window.location.href = 'http://localhost:3001/api/auth/google';
        const urlParams = new URLSearchParams(window.location.search);
        console.log('urlParams', urlParams);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>
                <div className="input-container">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                    <input 
                        type="email" 
                        placeholder="E-mail do usuario" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <br />
                <div className="input-container">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                </div>
                <br />
                <Link to="/esqueci-minha-senha">Esqueceu a senha?</Link>
                <div className="button-container">
                    <button onClick={login} className="button">Login</button>
                </div>
                <div className="button-container">
                    <button onClick={loginWithGoogle} className="button google-button">
                    <img src={googleIcon} style={{ width: '32px', height: '32px', marginRight: '8px' }} />   
                        <span>Login com Google</span>
                    </button>
                </div>
                <br />
                <Link to="/cadastro">Acessar cadastro</Link>
            </div>
        </div>
    );
};

export default Login;

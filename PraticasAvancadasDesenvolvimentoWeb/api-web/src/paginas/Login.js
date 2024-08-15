
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
//Importa o recurso para criar link do react
import {Link} from 'react-router-dom';

import '../CSS/login.css'; // Importando o arquivo CSS

//Utilizado para armazenar o token no localStorage ou sessionStorage após o login
import { AuthContext } from '../autenticacao/autenticacao';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [token, setToken] = useState('');
    const { setAuthToken } = useContext(AuthContext);
    const navigate = useNavigate();

     const login = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/login', { email, senha });
            setAuthToken(response.data.token);
            //localStorage.setItem('token', response.data.token); // Armazena o token
            setToken(response.data.token);
            navigate('/'); // Redireciona para a página interna
        } catch (error) {
            alert('Erro no login: ' + error.response.data);
        }
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
                <br></br>
                <div className="input-container">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                </div>
                <br></br>
                <Link to="/esqueci-minha-senha">Esqueceu a senha?</Link>
                <div className="button-container">
                    <button onClick={login} className="button">Login</button>
                </div>
                <br></br>
                <Link to="/cadastro">Acessar cadastro</Link>
            </div>
        </div>
    );
};
export default Login;
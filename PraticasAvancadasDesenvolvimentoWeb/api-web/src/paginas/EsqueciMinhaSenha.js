
import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/login.css'; 
import BotaoVoltar from '../componentes/BotaoVoltar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const EsqueciMinhaSenha = () => {
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const handlePasswordReset = async () => {
        
        if (!email) {
            setMensagem('Informar o e-mail');
        } else {
            try {
                const response = await axios.post('http://localhost:3001/api/esqueci-minha-senha', { email });                
                setMensagem('Um link de recuperação de senha foi enviado para o seu e-mail.');
            } catch (error) {
                setMensagem('Erro ao enviar e-mail de recuperação: ');
            }
        }
    };
    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Esqueci Minha Senha</h1>
                <div className="input-container">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input 
                    type="email" 
                    placeholder="Digite seu e-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                 </div>
                 <br></br>
                <button onClick={handlePasswordReset} className="button">Enviar</button>
                {mensagem && <p style={{ color: 'red' }}>{mensagem}</p>}
                <BotaoVoltar></BotaoVoltar>
            </div>
        </div>
    );
};
export default EsqueciMinhaSenha;
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const ResetarSenha = () => {
    
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const { token } = useParams();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (senha !== confirmaSenha) {
            setMensagem('As senhas não coincidem');
            return;
        }

        try {
            const response = await axios.post(`http://localhost:3001/api/resetarsenha`, {
                senha,
                token
            });
            console.log('response',response.status);

            if (response.status === 200){
                console.log('200');
                setMensagem('Senha redefinida com sucesso');
            }
            
        } catch (error) {
            setMensagem('Token invalido!',error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Redefinir Senha</h2>
                <form onSubmit={handleSubmit}>

                    <div className="input-container">
                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                        <input
                            type="password"
                            placeholder="Confirmar senha"
                            value={confirmaSenha}
                            onChange={(e) => setConfirmaSenha(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <button type="submit" className="button">Redefinir Senha</button>
                </form>
                {mensagem && <p style={{ color: 'red' }}>{mensagem}</p>}
                <br></br>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};
export default ResetarSenha;
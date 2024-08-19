import React, { useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../autenticacao/autenticacao';

const GoogleCallback = () => {
    
    const { setAuthToken } = useContext(AuthContext);  // useContext para setar o token no contexto
    const navigate = useNavigate();

    // Ref para garantir que o useEffect só execute uma vez
    const hasExecuted = useRef(false);

    useEffect(() => {
        if (hasExecuted.current) return;  // Se já executou, não faz nada
        hasExecuted.current = true;
       
        // Captura o token da URL
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            setAuthToken(token);  // Seta o token no AuthContext
            localStorage.setItem('token', token);  // Salva o token no localStorage            
            navigate('/home');  // Redireciona para a página inicial
        } else {
            navigate('/login');  // Redireciona para o login se algo deu errado
        }
    }, [setAuthToken, navigate]);  // Remove authToken da lista de dependências

    return <div>Carregando...</div>;  // Renderiza algo enquanto o efeito está sendo processado
};

export default GoogleCallback;
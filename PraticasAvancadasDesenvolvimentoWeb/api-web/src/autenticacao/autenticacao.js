import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

const verificarTokenServidor = async (token) => {
    try {
        const response = await axios.post('http://localhost:3001/api/validarToken', { token });
        return response.data.valid;
    } catch (error) {
        return false;
    }
};

export const AuthProvider = ({ children }) => {
    
    const [authToken, setAuthToken] = useState('');
    
    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const isValid = await verificarTokenServidor(token);
                if (isValid) {
                    setAuthToken(token);
                    localStorage.setItem('token', token);
                    localStorage.setItem('@Auth:token', token);
                } else {
                    localStorage.removeItem('token');
                }
            }
        };
        checkToken();
    }, []);

    useEffect(() => {
        if (authToken) {
            localStorage.setItem('@Auth:token', authToken);
        } else {
            localStorage.removeItem('@Auth:token', authToken);
        }
    }, [authToken]);

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken }}>
            {children}
        </AuthContext.Provider>
    );
};
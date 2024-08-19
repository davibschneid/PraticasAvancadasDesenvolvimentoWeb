
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './autenticacao';
import axios from 'axios';

const PrivateRoute = () => {
    
    const { authToken } = useContext(AuthContext);
    const [isValid, setIsValid] = useState(null);

    const verifyToken = async () => {
            
        try {
            const response = await axios.post('http://localhost:3001/api/validarToken', { token: authToken });
            setIsValid(response.data.valid);
            if(isValid){
                localStorage.setItem('token', authToken);
            }
        } catch {
            localStorage.removeItem('token');
            setIsValid(false);
        }
    };

    verifyToken();

    useEffect(() => {
        if (authToken) {
            console.log('Token valido !!!! ');
        } else {
            localStorage.removeItem('token');
            setIsValid(false);
        }
    }, [authToken]);

    if (isValid === null) {
        return <div>Loading...</div>;
    }

    return isValid ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
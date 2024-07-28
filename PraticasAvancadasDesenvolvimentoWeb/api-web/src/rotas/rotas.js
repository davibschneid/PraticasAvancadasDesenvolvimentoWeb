 

import React from 'react';

//importa 3 objetos da lib 
import { Route, Routes, BrowserRouter } from 'react-router-dom';
 
//Importa a página Home
import Home from '../paginas/Home';

//Importa a página Cadastro
import Cadastro from '../paginas/Cadastro';
 
function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact component={Home}/>
                <Route element={<Cadastro />} path="/cadastro" component={Cadastro} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
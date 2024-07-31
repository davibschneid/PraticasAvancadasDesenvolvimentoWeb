 

import React from 'react';

//importa 3 objetos da lib 
import { Route, Routes, BrowserRouter } from 'react-router-dom';
 
//Importa a página Home
import Home from '../paginas/Home';

//Importa a página Cadastro
import Cadastro from '../paginas/Cadastro';
import ListaRegistros from '../paginas/ListaRegistros';
import EditarRegistro from '../paginas/EditarRegistro';
 
function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact component={Home}/>
                <Route element={<Cadastro />} path="/cadastro" component={Cadastro} />
                <Route element={<ListaRegistros />} path="/lista" component={ListaRegistros} />
                <Route element={<EditarRegistro />} path="/editar/:id" component={EditarRegistro} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
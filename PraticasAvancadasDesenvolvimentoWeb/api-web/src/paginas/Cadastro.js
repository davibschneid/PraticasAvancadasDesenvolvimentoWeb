
import Header from '../Header';

import '../App.css';

import BotaoVoltar from '../componentes/BotaoVoltar';

//Utilizada para auxiliar no controle de outras funcoes da aplicacao
import React, { useState } from 'react';

import axios from 'axios';

function Cadastro() {

    //cria novo estado para os campos da tela
    const [campos, setCampos] = useState({
        nome: '',
        idade: 0,
        cidade: ''
    });

    const [mensagem, setMensagem] = useState('');

    function handleInputChange(event) {
        const { name, value } = event.target;
        setCampos(prevCampos => ({
            ...prevCampos,
            [name]: value
        }));
    }

     function handleFormSubmit(event){
        event.preventDefault();
        console.log(campos);
        axios.post('http://localhost:3001/api/usuarios', campos).then(response => {
            setMensagem('Formulário enviado com sucesso!');
        })

        // Mostrar mensagem de confirmação
        setMensagem('Formulário enviado com sucesso!');

        // Limpar os campos do formulário após o envio
        setCampos({
            nome: '',
            idade: '',
            cidade: ''
        });

    
        // Limpar mensagem após 3 segundos
        setTimeout(() => {
            setMensagem('');
        }, 3000);   
    }

    return (
        <div className="App">
            <Header title="Formulario de Cadastro" />

            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>
                        <h2>Dados de Cadastro</h2>
                    </legend>

                    <div>
                        <label>Nome:
                            <input type="text" name="nome" id="nome" value={campos.nome} onChange={handleInputChange}/>
                        </label>
                    </div>

                    <div>
                        <label>Idade:
                            <input type="number" name="idade" id="idade" value={campos.idade}  onChange={handleInputChange}/>
                        </label>
                    </div>

                    <div>
                        <label>Cidade:
                            <input type="text" name="cidade" id="cidade" value={campos.cidade}  onChange={handleInputChange}/>
                        </label>
                    </div>


                    <input type="submit" value="Salvar" />
                </fieldset>
            </form>
            {mensagem && <p>{mensagem}</p>}
            <BotaoVoltar></BotaoVoltar>

        </div>
    )
}

export default Cadastro;
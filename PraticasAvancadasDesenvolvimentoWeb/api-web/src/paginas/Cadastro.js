
import Header from '../Header';

import '../App.css';

import BotaoVoltar from '../componentes/BotaoVoltar';

//Utilizada para auxiliar no controle de outras funcoes da aplicacao
import React, { useState, useEffect } from 'react';

import axios from 'axios';

function Cadastro() {

    //cria novo estado para os campos da tela
    const [campos, setCampos] = useState({
        nome: '',
        idade: 0,
        cidade: '',
        uf: ''
    });

    const [estados, setEstados] = useState([]);

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                setEstados(response.data);
            })
    }, []);

    const [mensagem, setMensagem] = useState('');

    const [erros, setErros] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setCampos(prevCampos => ({
            ...prevCampos,
            [name]: value
        }));
    }

    function validarCampos() {
        const novosErros = {};

        if (!campos.nome) {
            novosErros.nome = 'Nome é obrigatório';
        }

        if (!campos.idade || campos.idade <= 0) {
            novosErros.idade = 'Idade deve ser um número positivo';
        }

        if (!campos.cidade) {
            novosErros.cidade = 'Cidade é obrigatória';
        }

        if (!campos.uf || campos.uf <= 0) {
            novosErros.uf = 'UF é obrigatório';
        }

        setErros(novosErros);

        return Object.keys(novosErros).length === 0;
    }


    function handleFormSubmit(event) {

        event.preventDefault();

        if (!validarCampos()) {
            return;
        }

        console.log('Submetendo:', campos);

        axios.post('http://localhost:3001/api/usuarios', campos)
            .then(response => {
                setMensagem('Formulário enviado com sucesso!');
                console.log(response.data);

                // Limpar os campos do formulário após o envio
                setCampos({
                    nome: '',
                    idade: 0,
                    cidade: '',
                    uf: ''
                });

                // Limpar mensagem após 3 segundos
                setTimeout(() => {
                    setMensagem('');
                }, 3000);
            })
            .catch(error => {
                console.error('Houve um erro ao enviar o formulário:', error);
                setMensagem('Erro ao enviar o formulário. Tente novamente.');
            });
    }

    return (
        <div className="App">
            <Header title="Formulario de Cadastro" />

            <div className="form-container">
                <form onSubmit={handleFormSubmit}>
                    <fieldset>
                        <legend>
                            <h2>Dados de Cadastro</h2>
                        </legend>

                        <div>
                            <label>Nome:
                                <input type="text" name="nome" id="nome" value={campos.nome} onChange={handleInputChange} />
                                {erros.nome && <p className="error">{erros.nome}</p>}
                            </label>
                        </div>

                        <div>
                            <label>Idade:
                                <input type="number" name="idade" id="idade" value={campos.idade} onChange={handleInputChange} />
                                {erros.idade && <p className="error">{erros.idade}</p>}
                            </label>
                        </div>

                        <div>
                            <label>Cidade:
                                <input type="text" name="cidade" id="cidade" value={campos.cidade} onChange={handleInputChange} />
                                {erros.cidade && <p className="error">{erros.cidade}</p>}
                            </label>
                        </div>

                        <div>
                            <label>UF:
                                <select name="uf" id="uf" value={campos.uf} onChange={handleInputChange}>
                                    <option value="0">Selecione uma opção</option>
                                    {estados.map(estado => (<option key={estado.sigla} value={estado.sigla}>{estado.sigla}</option>))}
                                </select>

                            </label>
                            <label>
                                <div>
                                    {erros.uf && <p className="error">{erros.uf}</p>}
                                </div>
                            </label>
                        </div>

                        <input type="submit" value="Salvar" />
                    </fieldset>
                </form>
                {mensagem && <p>{mensagem}</p>}
                <BotaoVoltar></BotaoVoltar>
            </div>


        </div>
    )
}

export default Cadastro;
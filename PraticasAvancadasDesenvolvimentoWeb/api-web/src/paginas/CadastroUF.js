
import Header from '../Header';

import '../App.css';

import BotaoVoltar from '../componentes/BotaoVoltar';

//Importar o cliente HTTP para requisicoes api externas
import axios from 'axios';

//Utilizada para auxiliar no controle de outras funcoes da aplicacao
import { useEffect, useState } from 'react';


function Cadastro() {

    const [estados, setEstados] = useState([]);

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                setEstados(response.data);
            })
    }, []);

    return (
        <div className="App">
            <Header title="Formulario de Cadastro" />

            <form>
                <fieldset>
                    <legend>
                        <h2>Dados de Cadastro</h2>
                    </legend>

                    <div>
                        <label>Nome:
                            <input type="text" name="nome" id="nome" />
                        </label>
                    </div>

                    <div>
                        <label>Idade:
                            <input type="number" name="idade" id="idade" />
                        </label>
                    </div>

                    <div>
                        <label>Cidade:
                            <input type="text" name="cidade" id="cidade" />
                        </label>
                    </div>


                    <div>
                        <label>UF:
                            <select name="cmbUF" id="cmbUF" >
                                <option value="0">Selecione uma opção</option>
                                {estados.map(estado => (<option key={estado.sigla} value={estado.sigla}>{estado.sigla}</option>))}
                            </select>
                        </label>
                    </div>


                    <input type="submit" value="Salvar" />
                </fieldset>
            </form>

            <BotaoVoltar></BotaoVoltar>

        </div>
    )
}

export default Cadastro;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotaoVoltar from '../componentes/BotaoVoltar';
import { Link } from 'react-router-dom';


import '../App.css';

 // Importando o ícone de edicao
import { FaEdit,FaTrash  } from 'react-icons/fa'; 


function ListaRegistros() {
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/usuarios')
      .then(response => {
        setRegistros(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Houve um problema ao buscar os registros.');
        setLoading(false);
      });
  }, []);


  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja deletar este registro?')) {
      axios.delete(`http://localhost:3001/api/usuarios/${id}`)
        .then(response => {
          setRegistros(registros.filter(registro => registro.id !== id));
          alert('Registro deletado com sucesso!');
        })
        .catch(error => {
          setError('Houve um problema ao deletar o registro.');
        });
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="lista-registros">
      <h2>Lista de Registros</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {registros.map(registro => (
            <tr key={registro.id}>
              <td>{registro.nome}</td>
              <td>{registro.idade}</td>
              <td>{registro.cidade}</td>
              <td class="action-column">
                <Link to={`/editar/${registro.id}`} className="espaco_coluna">
                   <FaEdit/> Editar  {/* Ícone de edição */}
                </Link>
                
                <Link onClick={() => handleDelete(registro.id)} >
                  <FaTrash /> Deletar {/* Ícone de delete */}
                </Link>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <BotaoVoltar/>
    </div>
  );
}

export default ListaRegistros;
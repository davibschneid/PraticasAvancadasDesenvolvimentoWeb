import React, { useState } from 'react';
import axios from 'axios';

import '../App.css';
import BuscarArquivo from './BuscarArquivo';

const UploadImagem = () => {

  //criar o estado do arquivo selecionado  
  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);

  //cria o estada da funcao de previsuar
  const [preVisualizacao, setPreVisualizacao] = useState(null);

  //cria o estado do progresso do upload
  const [uploadProgress, setProgressoUpload] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setArquivoSelecionado(file);
    setPreVisualizacao(URL.createObjectURL(file));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', arquivoSelecionado);

    try {
      const response = await axios.post('http://localhost:3001/api/uploadarquivo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgressoUpload(progress);
        },
      });
      console.log('Upload sucesso:', response.data);
    } catch (error) {
      console.error('Error no uploading da imagem:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Upload de Imagem</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleFileChange} />
        {preVisualizacao && <img src={preVisualizacao} alt="preVisualizacao" style={{ width: '20px' }} className="preview-image"/>}
        <button type="submit" className="submit-button" >Upload</button>
      </form>
      {uploadProgress > 0 && (
        <div className="upload-progress">
          <h3>Progresso do Upload</h3>
          <progress value={uploadProgress} max="50" />
          <span>{uploadProgress}%</span>
        </div>
      )}

        <BuscarArquivo />
    </div>
  );
};

export default UploadImagem;
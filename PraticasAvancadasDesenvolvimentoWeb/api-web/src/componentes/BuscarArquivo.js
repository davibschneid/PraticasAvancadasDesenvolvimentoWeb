import React, { useState } from 'react';
import './BuscarArquivo.css';


const BuscarArquivo = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [error, setError] = useState(null);
  const [id, setId] = useState('');
  const [fileType, setFileType] = useState('');


  const encontrarArquivo = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/uploadarquivo/${id}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar o arquivo');
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      console.log('Blob URL:', url);

      setFileUrl(url);
      setError(null);  // Limpa o erro ao buscar com sucesso

      const contentType = response.headers.get("Content-Type");
 
      console.log("ContentType:",contentType);


      if (contentType.startsWith('image/') || contentType.startsWith('application/octet-stream')) {
        console.log("IMAGEM");
        setFileType('imagem');
      } else if (contentType === 'audio/mpeg') {
        console.log("AUDIO");
        setFileType('audio');
      } else {
        console.log("NAO ENCONTRADO");
        setFileType('outro');
      }
  
      console.log("Tipo de arquivo:",fileType);

    } catch (err) {
      console.log("Erro ao buscar arquivo");
      setError(err.message);
    }
  };

  return (
    <div className="buscar-arquivo-container">
      <h2>Buscar Arquivo</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Informe o ID do arquivo"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={encontrarArquivo}>Buscar</button>
      </div>
      {error && <p className="error">{error}</p>}

      {fileType === 'audio' && (
       
       <div>
      
       <div>
         <a href={fileUrl} >Download</a>
       </div>
     </div>
      )}

      {fileType === 'imagem' && (
        <img src={fileUrl} alt="Arquivo encontrado" className="file-preview" />
      )}

    </div>
  );
};

export default BuscarArquivo;
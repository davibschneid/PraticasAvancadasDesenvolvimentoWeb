import React, { useState } from 'react';

const BuscarArquivo = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const fetchImage = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/uploadarquivo/${id}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar o arquivo');
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (err) {
      console.log("Erro ao buscar arquivo");
      setError(err.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter file ID"
        onBlur={(e) => fetchImage(e.target.value)}
      />
      {error && <p>{error}</p>}
      {imageUrl && <img src={imageUrl} alt="Fetched from API" />}
    </div>
  );
};

export default BuscarArquivo;
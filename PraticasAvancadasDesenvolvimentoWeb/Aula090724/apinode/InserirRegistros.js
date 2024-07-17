// Importar a biblioteca MongoDB
const { MongoClient } = require('mongodb');

// URL de conexão ao MongoDB
const url = 'mongodb://127.0.0.1:27017'; // Substitua pela URL do seu MongoDB
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Nome do banco de dados
const dbName = 'mongodb';

async function main() {
  // Conectar ao servidor MongoDB
  await client.connect();
  console.log('Conectado com sucesso ao servidor MongoDB');

  const db = client.db(dbName);

  // Acessar uma coleção
  const collection = db.collection('Cadastro');

  // Inserir um documento na coleção
  const insertResult = await collection.insertOne({ nome: 'Davi Schneid', idade: 30, cidade: 'Porto Alegre' });
  //console.log('Documento inserido:', insertResult.insertedId);

  // Buscar documentos na coleção
  const findResult = await collection.find({}).toArray();
  console.log('Documentos encontrados:', findResult);

  // Fechar a conexão
  await client.close();
}

main().catch(console.error);

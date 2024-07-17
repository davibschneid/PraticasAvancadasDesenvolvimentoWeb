 
const { MongoClient, ObjectId } = require("mongodb");
 
let singleton;

// Substitua pela URL do seu MongoDB
const MONGO_HOST = 'mongodb://mongo:12qwaszx@localhost:27017/?authSource=mongodb'; 

const MONGO_DATABASE = 'mongodb'; 

const COLLECTION = "Cadastro";
 
async function connect() {
    if (singleton) return singleton;
 
    const client = new MongoClient(MONGO_HOST);
    await client.connect();
 
    singleton = client.db(MONGO_DATABASE);
    return singleton;
}
  
//busca todos os registros da collection Cadastro
async function findAll() {
    const db = await connect();
    return db.collection(COLLECTION).find().toArray();
}
 
//busca registro por nome
async function findByName(nome) {
    const query = { nome: nome };
    const db = await connect();
    return db.collection(COLLECTION).find(query).toArray();
}

//insere o registro
async function insertOne(query) {
    const db = await connect();
    return db.collection(COLLECTION).insertOne(query);
}
 
async function update(id, query) {
    const db = await connect();
    return db.collection(COLLECTION).updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: query });
}
 
// permiti visualizar a funcao em outros arquivos
module.exports = { findAll , findByName, insertOne, update}
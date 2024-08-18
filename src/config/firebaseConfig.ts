
const path = require('path');
const admin = require('firebase-admin');


const serviceAccount = require(path.join(process.cwd(), 'src/config/serviceAccountKey.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://miltalentos-d9445.firebaseio.com"
});

export const db = admin.firestore(); // Para Firestore

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const path = require('path');
const admin = require('firebase-admin');
const serviceAccount = require(path.join(process.cwd(), 'src/config/serviceAccountKey.json'));
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://miltalentos-d9445.firebaseio.com"
});
exports.db = admin.firestore();
//# sourceMappingURL=firebaseConfig.js.map
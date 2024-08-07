
const { db } = require('../config/firebaseConfig');

exports.addUser = async (req, res) => {
  console.log('Adicionando user');
  try {
    const userRef = db.collection('users').doc(req.body.id);
    await userRef.set({
      name: req.body.name,
      email: req.body.email
    });
   
    res.status(200).send('User added successfully');
  } catch (error) {
    res.status(500).send('Error adding user: ' + error.message);
  }
};

exports.getUser = async (req, res) => {
  try {
    const userRef = db.collection('users').doc(req.params.id);
    const doc = await userRef.get();
    if (!doc.exists) {
      res.status(404).send('No such user!');
    } else {
      res.status(200).json(doc.data());
    }
  } catch (error) {
    res.status(500).send('Error getting user: ' + error.message);
  }
};

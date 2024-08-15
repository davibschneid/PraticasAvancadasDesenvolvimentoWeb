
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

exports.getUserByName = async (req, res) => {
  try {
    const name = req.params.name;
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('name', '==', name).get();

    if (snapshot.empty) {
      return res.status(404).send('No matching users found.');
    }

    let users = [];
    snapshot.forEach(doc => {
      users.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send('Error getting user by name: ' + error.message);
  }
};


exports.deleteUserByName = async (req, res) => {
  try {
    const name = req.params.name;
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('name', '==', name).get();

    if (snapshot.empty) {
      return res.status(404).send('No matching users found.');
    }

    snapshot.forEach(async (doc) => {
      await doc.ref.delete();
    });

    res.status(200).send(`User(s) with name ${name} deleted successfully`);
  } catch (error) {
    res.status(500).send('Error deleting user: ' + error.message);
  }
};


exports.updateUserByName = async (req, res) => {
  try {
    const name = req.params.name;
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('name', '==', name).get();

    if (snapshot.empty) {
      return res.status(404).send('No matching users found.');
    }

    const updateData = req.body;  // Os dados a serem atualizados são fornecidos no corpo da requisição

    snapshot.forEach(async (doc) => {
      await doc.ref.update(updateData);
    });

    res.status(200).send(`User(s) with name ${name} updated successfully`);
  } catch (error) {
    res.status(500).send('Error updating user: ' + error.message);
  }
};
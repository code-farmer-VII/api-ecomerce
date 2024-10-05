// controllers/userController.js

const db = require('../Database/db'); // Import the MySQL connection

// Get all users
exports.getAllUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};

// Create a new user
exports.createUser = (req, res) => {
    const { name, age } = req.body;
    db.query('INSERT INTO users (name, age) VALUES (?, ?)', [name, age], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ id: results.insertId, name, age });
    });
};

// Get a user by ID
exports.getUserById = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length === 0) return res.status(404).send('User not found');
        res.json(results[0]);
    });
};

// Update a user by ID
exports.updateUser = (req, res) => {
    const id = req.params.id;
    const { name, age } = req.body;
    db.query('UPDATE users SET name = ?, age = ? WHERE id = ?', [name, age, id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.affectedRows === 0) return res.status(404).send('User not found');
        res.json({ id, name, age });
    });
};

// Delete a user by ID
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.affectedRows === 0) return res.status(404).send('User not found');
        res.status(204).send();
    });
};

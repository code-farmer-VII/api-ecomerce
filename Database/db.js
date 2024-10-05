// db.js

const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Default XAMPP user
    password: '',  // Default XAMPP password (usually empty)
    database: 'test_db' // Your database name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the MySQL database');
});

module.exports = connection;

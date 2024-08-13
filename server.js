// server.js

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3009; // You can use any available port

app.use(cors()); // Enable CORS for requests from frontend
app.use(express.json()); // Parse JSON bodies

// MySQL connection setup
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'githubsite'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Example endpoint to get data from MySQL
app.get('/data', (req, res) => {
    connection.query('SELECT * FROM your_table_name', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

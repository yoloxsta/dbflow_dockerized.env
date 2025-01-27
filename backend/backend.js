const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });

const app = express();
const port = 3000;

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST,  // MySQL service name in docker-compose
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

let db;

// Retry connection mechanism
function connectToDb() {
  db = mysql.createConnection(dbConfig);

  db.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err);
      setTimeout(connectToDb, 5000);  // Retry after 5 seconds
    } else {
      console.log('Connected to the database.');
    }
  });
}

// Call the connection function
connectToDb();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle form submission
app.post('/submit', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send('Name is required.');
  }

  const query = 'INSERT INTO users (name) VALUES (?)';
  db.query(query, [name], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Database error.');
    }
    res.status(200).send('Data inserted successfully.');
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

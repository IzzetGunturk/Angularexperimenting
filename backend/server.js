// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'angular'
});

connection.connect((err) => {
  if (err) {
    console.error('Fout bij het verbinden met de database:', err);
    return;
  }
  console.log('Verbonden met de database');
});

app.get('/orders', (req, res) => {
  const sql = "SELECT * FROM orders";
  connection.query(sql, (err, data) => {
      if(err) return res.json(err);
      return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});

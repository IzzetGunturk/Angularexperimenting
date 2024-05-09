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

app.delete('/orders/:id', (req, res) => {
  const orderId = req.params.id;
  const sql = "DELETE FROM orders WHERE id = ?";
  
  connection.query(sql, orderId, (err, result) => {
    if (err) {
      console.error('Fout bij het verwijderen van order:', err);
      return res.status(500).json({ error: 'Er is een interne fout opgetreden bij het verwijderen van de order.' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: `Order met ID ${orderId} niet gevonden.` });
    }

    return res.json({ message: `Order met ID ${orderId} is succesvol verwijderd.` });
  });
});

app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});

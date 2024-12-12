// FILE: routes/authRoutes.js

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/db');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password, role } = req.body; // role can be 'user' or 'pharmacy'
  const hashedPassword = await bcrypt.hash(password, 10);
  db.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, hashedPassword, role], (err, result) => {
    if (err) {
      console.error('Database Insert Error:', err);
      return res.status(500).json({ message: 'Registration failed', error: err });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ message: 'Authentication failed' });
    const user = results[0];
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(401).json({ message: 'Authentication failed' });
    const token = jwt.sign({ userId: user.id, role: user.role }, 'your_jwt_secret');
    res.status(200).json({ token });
  });
});

module.exports = router;
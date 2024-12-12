// FILE: server.js

const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./models/db');

// Import Routes
const authRoutes = require('./routes/authRoutes');
const prescriptionRoutes = require('./routes/prescriptionRoutes');
const pharmacyRoutes = require('./routes/pharmacyRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/auth', authRoutes);
app.use('/api', prescriptionRoutes);
app.use('/api', pharmacyRoutes);

// Test database connection
app.get('/api/test-db', (req, res) => {
    db.query('SELECT 1 + 1 AS solution', (err, results) => {
        if (err) {
            console.error('Database connection error:', err);
            return res.status(500).json({ message: 'Database connection failed', error: err });
        }
        res.status(200).json({ message: 'Database connected successfully!', solution: results[0].solution });
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
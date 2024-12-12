// FILE: prescriptionController.js

const db = require('../models/db');

// Upload prescription
exports.uploadPrescription = (req, res) => {
    const { userId, note, deliveryAddress } = req.body;
    const images = JSON.stringify(req.files.map(file => file.filename));

    db.query('INSERT INTO prescriptions (user_id, note, delivery_address, images) VALUES (?, ?, ?, ?)',
        [userId, note, deliveryAddress, images], 
        (err, result) => {
            if (err) return res.status(500).json({ message: 'Upload failed', error: err });
            res.status(201).json({ message: 'Prescription uploaded successfully' });
        }
    );
};

// View prescriptions for a user
exports.getPrescriptions = (req, res) => {
    const userId = req.params.userId;

    db.query('SELECT * FROM prescriptions WHERE user_id = ?', [userId], 
        (err, results) => {
            if (err) return res.status(500).json({ message: 'Failed to fetch prescriptions', error: err });
            res.status(200).json(results);
        }
    );
};

// View all prescriptions
exports.viewAllPrescriptions = (req, res) => {
    db.query('SELECT * FROM prescriptions', (err, results) => {
        if (err) return res.status(500).json({ message: 'Failed to fetch prescriptions', error: err });
        res.status(200).json(results);
    });
};
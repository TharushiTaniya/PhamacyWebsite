const db = require('../models/db');

// View all prescriptions
exports.viewPrescriptions = (req, res) => {
    db.query('SELECT * FROM prescriptions ORDER BY created_at DESC', (err, results) => {
        if (err) return res.status(500).json({ message: 'Failed to fetch prescriptions', error: err });
        res.status(200).json(results);
    });
};

// Prepare a quotation
exports.prepareQuotation = (req, res) => {
    const { prescriptionId, pharmacyId, quotation } = req.body;

    db.query(
        'INSERT INTO quotations (prescription_id, pharmacy_id, quotation) VALUES (?, ?, ?)',
        [prescriptionId, pharmacyId, quotation],
        (err, result) => {
            if (err) return res.status(500).json({ message: 'Failed to prepare quotation', error: err });
            db.query(
                'UPDATE prescriptions SET status = ? WHERE id = ?',
                ['pending', prescriptionId],
                (updateErr) => {
                    if (updateErr) return res.status(500).json({ message: 'Failed to update status', error: updateErr });
                    res.status(201).json({ message: 'Quotation prepared successfully' });
                }
            );
        }
    );
};

// Get all quotations by pharmacy
exports.getQuotations = (req, res) => {
    const { pharmacyId } = req.params;

    db.query(
        'SELECT * FROM quotations WHERE pharmacy_id = ?',
        [pharmacyId],
        (err, results) => {
            if (err) return res.status(500).json({ message: 'Failed to fetch quotations', error: err });
            res.status(200).json(results);
        }
    );
};

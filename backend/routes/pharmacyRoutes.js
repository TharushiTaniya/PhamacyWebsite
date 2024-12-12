// FILE: routes/pharmacyRoutes.js

const express = require('express');
const { viewPrescriptions, prepareQuotation, getQuotations } = require('../controllers/pharmacyController');
const authenticate = require('./authenticate'); // Correctly import the authenticate middleware
const router = express.Router();

// Route to view all prescriptions
router.get('/prescriptions', authenticate, viewPrescriptions);

// Route to prepare a quotation for a prescription
router.post('/quotation', authenticate, prepareQuotation);

// Route to view all quotations prepared by the pharmacy
router.get('/quotations/:pharmacyId', authenticate, getQuotations);

module.exports = router;
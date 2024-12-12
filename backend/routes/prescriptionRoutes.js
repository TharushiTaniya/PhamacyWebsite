const express = require('express');
const multer = require('multer');
const { uploadPrescription, getPrescriptions } = require('../controllers/prescriptionController');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/upload', upload.array('images', 5), uploadPrescription);
router.get('/user/:userId', getPrescriptions);

module.exports = router;

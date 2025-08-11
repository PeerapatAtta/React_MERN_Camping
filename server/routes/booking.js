const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/booking');
const { authCheck } = require('../midllewares/auth');

// Endpoint https://localhost:5000/api/booking
router.post('/booking',authCheck ,createBooking);

module.exports = router;

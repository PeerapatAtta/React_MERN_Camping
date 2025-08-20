const express = require('express');
const router = express.Router();
const { createBooking, checkout } = require('../controllers/booking');
const { authCheck } = require('../midllewares/auth');

// Endpoint https://localhost:5000/api/booking
router.post('/booking',authCheck ,createBooking);

// Endpoint https://localhost:5000/api/checkout
router.post('/checkout',authCheck ,checkout);

module.exports = router;

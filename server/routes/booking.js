const express = require('express');
const router = express.Router();
const { createBooking, checkout, checkOutStatus } = require('../controllers/booking');
const { authCheck } = require('../midllewares/auth');

// Endpoint https://localhost:5000/api/booking
router.post('/booking',authCheck ,createBooking);

// Endpoint https://localhost:5000/api/checkout
router.post('/checkout',authCheck ,checkout);

// Endpoint https://localhost:5000/api/checkout-status/:session_id
router.get('/checkout-status/:session_id',authCheck ,checkOutStatus);


module.exports = router;

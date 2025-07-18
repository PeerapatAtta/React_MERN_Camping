const express = require('express');
const router = express.Router();
const { createProfile } = require('../controllers/profile');
const { authCheck } = require('../midllewares/auth');

// Endpoint https://localhost:5000/api/profile
router.post('/profile',authCheck ,createProfile);

module.exports = router; // This is the profile route file that handles all profile-related requests
    
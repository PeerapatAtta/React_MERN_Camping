const express = require('express');
const router = express.Router();
const { authCheck } = require('../midllewares/auth');
const { createImages } = require('../controllers/cloundinary');

// Endpoint https://localhost:5000/api/images
router.post('/images', authCheck,createImages);

module.exports = router; // This is the profile route file that handles all profile-related requests
    
const express = require('express');
const router = express.Router();
const {
    listProfile,
    readProfile,
    createProfile,
    updateProfile,
    deleteProfile
} = require('../controllers/profile');

// Endpoint https://localhost:5000/api/profile
router.get('/profile', listProfile);
router.get('/profile/:id', readProfile);
router.post('/profile', createProfile);
router.put('/profile/:id', updateProfile);
router.delete('/profile/:id', deleteProfile);


module.exports = router; // This is the profile route file that handles all profile-related requests






module.exports = router;
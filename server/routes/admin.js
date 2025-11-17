const express = require('express');
const router = express.Router();
const { listStates } = require('../controllers/admin');
const { authCheck } = require('../midllewares/auth');

// Endpoint https://localhost:5000/api/states
router.get('/states', authCheck, listStates);


module.exports = router;

const express = require('express');
const router = express.Router();
const {
    listCamping,
    readCamping,
    createCamping,
    updateCamping,
    deleteCamping
} = require('../controllers/camping');
const { authCheck } = require('../midllewares/auth'); 

// Endpoint https://localhost:5000/api/camping
router.get('/camping',authCheck, listCamping);
router.get('/camping/:id', readCamping);
router.post('/camping',authCheck,createCamping);
router.put('/camping/:id', updateCamping);
router.delete('/camping/:id', deleteCamping);

module.exports = router;
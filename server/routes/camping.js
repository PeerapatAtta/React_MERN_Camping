const express = require('express');
const {
    listCamping,
    readCamping,
    createCamping,
    updateCamping,
    deleteCamping
} = require('../controllers/camping');

const router = express.Router();

// Endpoint https://localhost:5000/api:
router.get('/camping', listCamping);

router.get('/camping/:id', readCamping);

router.post('/camping', createCamping);

router.put('/camping/:id', updateCamping);

router.delete('/camping/:id', deleteCamping);


module.exports = router;
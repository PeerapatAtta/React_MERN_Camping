const express = require('express');
const router = express.Router();
const {
    listCamping,
    readCamping,
    createCamping,
    updateCamping,
    deleteCamping,
    actionFavorite,
    listFavorites
} = require('../controllers/camping');
const { authCheck } = require('../midllewares/auth'); 

// Endpoint https://localhost:5000/api/camping
router.get('/campings/:id',listCamping);
router.get('/camping/:id', readCamping);
router.post('/camping',authCheck,createCamping);
router.put('/camping/:id', updateCamping);
router.delete('/camping/:id', deleteCamping);
// Favorite
router.post('/favorite',authCheck,actionFavorite);
router.get('/favorites',authCheck,listFavorites);

module.exports = router;
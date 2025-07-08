const express = require('express');

const router = express.Router();

// Endpoint https://localhost:5000/api:
router.get('/camping', (req, res) => {
    res.json('Camping route is working!');
});

router.get('/camping/:id', (req, res) => {
    const { id } = req.params;
    res.json(`Camping GET with ID: ${id}`);
});

router.post('/camping', (req, res) => {
    const { title, price, description } = req.body;
    console.log(`Title: ${title}, Price: ${price}, Description: ${description}`);
    res.send('Camping POST');
});

router.put('/camping/:id', (req, res) => {
    res.send('Camping PUT');
});

router.delete('/camping/:id', (req, res) => {
    res.send('Camping DELETE');
});


module.exports = router;
const express = require('express');
const cors = require('cors');
const campingRoute = require('./routes/camping');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(cors()); // Middleware to allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON bodies
app.use(morgan('dev')); // Middleware for logging HTTP requests

// Routes
app.use('/api', campingRoute);

const PORT = 5000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

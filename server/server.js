const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const campingRoute = require('./routes/camping');
// const profileRoute = require('./routes/profile'); 
const { readdirSync } = require('fs');
const { handleError } = require('./midllewares/error');


const app = express();

// Middleware
app.use(cors()); // Middleware to allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON bodies
app.use(morgan('dev')); // Middleware for logging HTTP requests

// Routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`))); // Dynamically load all routes from the routes directory
// app.use('/api', campingRoute);
// app.use('/api', profileRoute);

// Error handling middleware
app.use(handleError); // Custom error handling middleware

const PORT = 5000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

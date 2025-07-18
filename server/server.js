const express = require('express'); // Import express for creating the server
const cors = require('cors');
const morgan = require('morgan');
const { readdirSync } = require('fs');
const { handleError } = require('./midllewares/error');
require("dotenv/config"); // Load environment variables from .env file
const { clerkMiddleware } = require('@clerk/express'); // Import Clerk middleware for authentication


const app = express();

// Middleware
app.use(cors()); // Middleware to allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON bodies
app.use(morgan('dev')); // Middleware for logging HTTP requests
app.use(clerkMiddleware()); // Middleware for Clerk authentication

// Routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`))); // Dynamically load all routes from the routes directory
// app.use('/api', campingRoute);
// app.use('/api', profileRoute);

// Error handling middleware
app.use(handleError); // Custom error handling middleware

const PORT = 5000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.json('Hello from the server!' );
});


const PORT = 5000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

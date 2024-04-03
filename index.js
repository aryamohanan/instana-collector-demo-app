// index.js

const instana = require('@instana/collector');
instana();
// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = process.env.PORT || 3000; // Set port from environment variable or default to 3000

// Define a route for the status endpoint
app.get('/status', (req, res) => {
  res.json({ status: 'OK' }); // Respond with a JSON object containing status information
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

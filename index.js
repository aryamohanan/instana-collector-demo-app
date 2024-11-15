const instana = require('@instana/collector');
instana();
// Import required modules
const express = require('express');
const got = require('got');


const app = express();
const port = process.env.PORT || 3000; 


app.get('/status', (req, res) => {
  res.json({ status: 'OK' }); 
});

app.get('/v1/status', async (req, res) => {
    console.log(`${req.method} ${req.url}`);
  
    try {
      const response = await got.get(
        'https://example.com/?random=100'
      );
      res.send('Hello World, I am healthy');
    } catch (error) {
      console.error('Error retrieving collected requests:', error);
      res.status(500).send('Internal Server Error');
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');

// Create an Express app
const app = express();

// Define a route for the root URL
app.get('/', (_, res) => {
  res.send('Hello Holberton School!\n');
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;

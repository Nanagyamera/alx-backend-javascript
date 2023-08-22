const express = require('express');
const countStudents = require('./3-read_file_async'); // Assuming you have 3-read_file_async.js in the same directory

// Create an Express app
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Define a route for the /students URL
app.get('/students', (req, res) => {
  countStudents('database.csv')
    .then(result => {
      const response = [
        'This is the list of our students',
        `Number of students: ${result.numberOfStudents}`,
        `Number of students in CS: ${result.firstNameList.CS.length}. List: ${result.firstNameList.CS.join(', ')}`,
        `Number of students in SWE: ${result.firstNameList.SWE.length}. List: ${result.firstNameList.SWE.join(', ')}`
      ].join('\n');
      res.send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;

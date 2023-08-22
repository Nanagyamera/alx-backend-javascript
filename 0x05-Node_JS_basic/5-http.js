const http = require('http');
const fs = require('fs');
const path = require('path');
const countStudents = require('./3-read_file_async'); // Assuming you have 3-read_file_async.js in the same directory

// Get the database file path from command-line arguments
const databaseFilePath = process.argv[2];

// Create the HTTP server
const app = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (method === 'GET' && url === '/students') {
    countStudents(databaseFilePath)
      .then(result => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${result.numberOfStudents}\n`);
        res.write(`Number of students in CS: ${result.firstNameList.CS.length}. List: ${result.firstNameList.CS.join(', ')}\n`);
        res.write(`Number of students in SWE: ${result.firstNameList.SWE.length}. List: ${result.firstNameList.SWE.join(', ')}\n`);
        res.end();
      })
      .catch(error => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found\n');
  }
});

// Listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;

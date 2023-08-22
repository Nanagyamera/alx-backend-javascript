const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = { CS: [], SWE: [] };

      lines.forEach(line => {
        const fields = line.split(',');
        if (fields.length >= 4) {
          const field = fields[3].trim();
          students[field].push(fields[0]);
        }
      });

      resolve(students);
    });
  });
}

module.exports = {
  readDatabase
};

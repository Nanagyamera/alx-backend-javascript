const fs = require('fs');

// Define the countStudents function
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject("Cannot load the database");
        return;
      }

      // Split the data into lines
      const lines = data.split('\n').filter(line => line.trim() !== '');

      // Calculate the number of students and create lists of first names
      let numberOfStudents = 0;
      const firstNameList = { CS: [], SWE: [] };

      lines.forEach(line => {
        const fields = line.split(',');
        if (fields.length >= 2) {
          numberOfStudents++;
          const field = fields[3].trim();
          firstNameList[field].push(fields[0]);
        }
      });

      // Construct the result object
      const result = {
        numberOfStudents,
        firstNameList
      };

      resolve(result);
    });
  });
}

// Call the function with the path to the database file
countStudents('database.csv')
  .then(result => {
    console.log(`Number of students: ${result.numberOfStudents}`);
    console.log(`Number of students in field CS: ${result.firstNameList.CS.length}. List: ${result.firstNameList.CS.join(', ')}`);
    console.log(`Number of students in field SWE: ${result.firstNameList.SWE.length}. List: ${result.firstNameList.SWE.join(', ')}`);
  })
  .catch(error => {
    console.error(error);
  });

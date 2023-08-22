const fs = require('fs');

// Define the countStudents function
function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the data into lines
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines
    
    // Calculate the number of students and create a list of first names
    let numberOfStudents = 0;
    const firstNameList = [];
    
    lines.forEach(line => {
      const fields = line.split(',');
      if (fields.length >= 2) {
        numberOfStudents++;
        firstNameList.push(fields[0]);
      }
    });
    
    // Log the results
    console.log(`Number of students: ${numberOfStudents}`);
    console.log(`Number of students in field CS: ${firstNameList.filter(name => name.includes('CS')).length}. List: ${firstNameList.filter(name => name.includes('CS')).join(', ')}`);
    console.log(`Number of students in field SWE: ${firstNameList.filter(name => name.includes('SWE')).length}. List: ${firstNameList.filter(name => name.includes('SWE')).join(', ')}`);
  } catch (error) {
    console.error("Cannot load the database");
  }
}

// Call the function with the path to the database file
countStudents('database.csv');

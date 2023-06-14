const fs = require('fs');

/**
 * Counts the students in a CSV data file asynchronously.
 * @param {String} path The path to the CSV data file.
 * @returns {Promise} A promise that resolves when the counting is done.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.map((line) => line.split(','));
        const totalStudents = students.length - 1; // Subtracting the header line

        console.log(`Number of students: ${totalStudents}`);
        const fields = {};
        for (let i = 1; i < students.length; i += 1) {
          const field = students[i][3];
          if (fields[field]) {
            fields[field].count += 1;
            fields[field].students.push(students[i][0]);
          } else {
            fields[field] = {
              count: 1,
              students: [students[i][0]],
            };
          }
        }

        for (const field of Object.keys(fields)) {
          const { count, students } = fields[field];
          const studentList = students.join(', ');
          console.log(`Number of students in ${field}: ${count}. List: ${studentList}`);
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;

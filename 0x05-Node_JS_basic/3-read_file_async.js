const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line !== '');

      const students = lines.map((line) => line.split(','));

      const fields = {};
      students.forEach((student) => {
        const field = student[3];
        if (field in fields) {
          fields[field].count += 1;
          fields[field].students.push(student[0]);
        } else {
          fields[field] = {
            count: 1,
            students: [student[0]],
          };
        }
      });

      const totalStudents = students.length;

      console.log(`Number of students: ${totalStudents}`);
      for (const field in fields) {
        console.log(
          `Number of students in ${field}: ${fields[field].count}. List: ${fields[field].students.join(
            ', '
          )}`
        );
      }

      resolve();
    });
  });
}

module.exports = countStudents;

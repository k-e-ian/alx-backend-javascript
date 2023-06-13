const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

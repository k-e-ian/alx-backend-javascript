const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = lines.map((line) => line.split(','));

    const fields = {};
    students.forEach((student) => {
      const field = student[3].trim();
      if (field === '') {
        return; // Skip empty field
      }
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        fields[field].count += 1;
        fields[field].students.push(student[0]);
      } else {
        fields[field] = {
          count: 1,
          students: [student[0]],
        };
      }
    });

    const totalStudents = Object.values(fields)
      .map((field) => field.count)
      .reduce((sum, count) => sum + count, 0);

    console.log(`Number of students: ${totalStudents}`);
    delete fields.field; // Remove the unwanted "field" entry
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(
          `Number of students in ${field}: ${fields[field].count}. List: ${fields[field].students.join(', ')}`,
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

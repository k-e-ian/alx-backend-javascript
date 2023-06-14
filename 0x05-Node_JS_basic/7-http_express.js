const express = require('express');
const fs = require('fs');
const { countStudents } = require('./3-read_file_async');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv[2];

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!\n');
});

app.get('/students', (req, res) => {
  if (fs.existsSync(DB_FILE)) {
    fs.readFile(DB_FILE, 'utf-8', (err, data) => {
      if (err) {
        res.status(500).send('Internal Server Error');
        console.log(err); // Log the error to the console
      } else {
        // Process the database file content and send the response
        const lines = data.trim().split('\n');
        let totalStudents = 0;
        const studentGroups = {};

        for (let i = 1; i < lines.length; i += 1) {
          const fields = lines[i].split(',');
          const field = fields[fields.length - 1];
          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }
          studentGroups[field].push(fields[0]);
          totalStudents += 1;
        }

        const responseParts = [];
        responseParts.push(`Number of students: ${totalStudents}`);
        for (const [field, students] of Object.entries(studentGroups)) {
          responseParts.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

        const responseText = `This is the list of our students\n${responseParts.join('\n')}`;
        res.type('text/plain');
        res.send(responseText);
      }
    });
  } else {
    // Database file not found, handle it using countStudents asynchronously
    countStudents(DB_FILE)
      .then((data) => {
        const responseText = `This is the list of our students\n${data}`;
        res.type('text/plain');
        res.send(responseText);
      })
      .catch((error) => {
        res.status(500).send('Internal Server Error');
        console.log(error); // Log the error to the console
      });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;

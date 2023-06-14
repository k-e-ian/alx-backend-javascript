const http = require('http');
const fs = require('fs');

const PORT = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    fs.readFile('database.csv', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        console.log(err); // Log the error to the console
      } else {
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
        res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': Buffer.byteLength(responseText) });
        res.end(responseText);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found\n');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;

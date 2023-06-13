const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];
  countStudents(database)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.send(error.message);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;

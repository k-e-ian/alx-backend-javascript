const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
  const { method, url } = req;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (method === 'GET' && url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (method === 'GET' && url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(databasePath)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;

import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 1245;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to attach the database filename to the request object
app.use((req, res, next) => {
  req.database = process.argv[2];
  next();
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;

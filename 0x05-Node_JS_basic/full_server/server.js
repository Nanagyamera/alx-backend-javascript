import express from 'express';
import routes from './routes';

const app = express();

// Get the database filename from command-line arguments
const databaseFilename = process.argv[2];

// Attach filename to the request object for later use in controllers
app.use((req, res, next) => {
  req.filename = databaseFilename;
  next();
});

app.use('/', routes);

const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;

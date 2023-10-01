import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import errorMiddleware from './middleware/error.middleware';
import config from './config';
import db from './database';

const PORT = config.port || 3000;

// Create instance server
const app: Application = express();

// HTTP request logger server
app.use(morgan('combined'));
// HTTP security middleware
app.use(helmet());
// middleware to parse incoming requests
app.use(express.json());
// Apply the rate limiting middleware to all requests
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: 'Too many requests, please try again later after 15 minutes.',
    // store: ... , // Use an external store for more precise rate limiting
  }),
);
// Add routing for / path
app.get('/', (req: Request, res: Response) => {
  throw new Error('Error exists, YO!');
  res.json({
    message: 'Hello from GET',
  });
});

// post request
app.post('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello world from post!',
    data: req.body,
  });
});

// test db
db.connect().then((client) => {
  return client
    .query('SELECT NOW()')
    .then((res) => {
      client.release();
      console.log(res.rows);
    })
    .catch((err) => {
      client.release();
      console.log(err.stack);
    });
});

// error handler middleware
app.use(errorMiddleware);

app.use((_: Request, res: Response) => {
  res.status(404).json({
    message:
      'Ohh you are lost, read the API documentation to find your way back home 😂',
  });
});

// Start express server
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} `);
});

export default app;

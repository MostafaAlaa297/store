import express, { Application, Request, Response } from 'express';

const PORT = 3000;

// Create instance server
const app: Application = express();

// Add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello world!',
  });
});

// Start express server
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} `);
});

export default app;

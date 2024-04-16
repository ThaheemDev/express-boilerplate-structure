import http from 'http';
import express, { Express, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import config from './configurations/config';
import logging from './configurations/logging';
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorMiddleware } from './middleware/errorMiddleware';
import AppRoutes from './routes';
import { generalResponse } from './utils/generalResponse';

// Create an instance of Express
const app: Express = express();

const NAMESPACE = 'Server';

// Serve static files from the 'public' directory
app.use(express.static('./public'));

// Connect to MongoDB
mongoose
  .connect(config.mongo.url)
  .then(() => {
    logging.info(NAMESPACE, 'Mongo Connected');
  })
  .catch((error) => {
    logging.error(NAMESPACE, error.message, error);
  });

mongoose.Promise = global.Promise;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

// Log request details
app.use((req: Request, res: Response, next: NextFunction) => {
  logging.info(
    NAMESPACE,
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`,
  );
  res.on('finish', () => {
    logging.info(
      NAMESPACE,
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`,
    );
  });

  next();
});

// Parse request bodies as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Define a route for the root URL
app.get('/', (req: Request, response: Response) => {
  generalResponse({
    response,
    status: 200,
    message: 'Welcome to backend api!',
  });
});

// Mount the application routes
app.use(config.api.prefix, AppRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Handle 404 errors
app.all('*', (req: Request, response: Response, next: NextFunction) => {
  generalResponse({
    response,
    status: 404,
    message: 'Route not found',
  });
  next();
});

// Create an HTTP server using the Express app
const httpServer = http.createServer(app);

// Start the server
httpServer.listen(config.server.port, () => {
  logging.info(
    NAMESPACE,
    `Server is running ${config.server.hostname}:${config.server.port}`,
  );
});

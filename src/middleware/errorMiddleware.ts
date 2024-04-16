import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../errors/HttpException';
import { generalResponse } from '../utils/generalResponse';

/**
 * Middleware function to handle errors and send appropriate responses.
 *
 * @param error - The error object.
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The next middleware function.
 */
export function errorMiddleware(
  error: HttpException,
  req: Request,
  response: Response,
  next: NextFunction,
) {
  if (error instanceof HttpException) {
    generalResponse({
      response,
      status: error.status,
      message: error.message,
    });
  } else {
    generalResponse({
      response,
      status: 500,
      message: 'Internal Server Error',
    });
  }
}

import { HttpException } from './HttpException';

/**
 * Represents a BadRequestException, which is thrown when a client request is invalid.
 * Extends the HttpException class.
 */
export class BadRequestException extends HttpException {
  /**
   * Creates an instance of BadRequestException.
   * @param message - The error message associated with the exception.
   */
  constructor(message: string) {
    super(400, message);
  }
}

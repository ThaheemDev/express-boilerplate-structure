import { HttpException } from './HttpException';

/**
 * Represents a ForbiddenException, which is thrown when a user is not authorized to access a resource.
 * Extends the HttpException class.
 */
export class ForbiddenException extends HttpException {
  /**
   * Creates a new instance of the ForbiddenException class.
   * @param message - The error message associated with the exception.
   */
  constructor(message: string) {
    super(403, message);
  }
}

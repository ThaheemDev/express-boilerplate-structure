import { HttpException } from './HttpException';

/**
 * Represents an exception that is thrown when a resource is not found.
 * Extends the HttpException class.
 */
export class NotFoundException extends HttpException {
    /**
     * Creates a new instance of the NotFoundException class.
     * @param message - The error message associated with the exception.
     */
    constructor(message: string) {
        super(404, message);
    }
}
